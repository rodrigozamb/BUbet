import { UsersRepository } from "@/repositories/users-repository"
import { v4 as uuid } from 'uuid'
import { hash } from "bcryptjs"
import { UserAlreadyExistsError } from "../errors/user-already-exists-error"
import { User } from "@prisma/client"
import { resend_sendConfirmationEmail, sendConfirmationEmail } from "@/utils/sendMail"
import { env } from './../../env'
import { s3 } from "@/utils/s3"
interface CreateUserUseCaseRequest{
    name:string
    email:string
    username: string
    password: string
    profile_image: any
}

interface CreateUserUseCaseResponse{
    user: User
}

export class CreateUserUseCase{

    constructor(
        private usersRepository: UsersRepository, 
    ){}
    
    async execute({email,name,username,password, profile_image}:CreateUserUseCaseRequest): Promise<CreateUserUseCaseResponse>{
        profile_image = await profile_image
        

        const password_hash = await hash(password, 6)
    
        const userWithSameEmail = await this.usersRepository.findByEmail(email)
        
        if(userWithSameEmail){
            throw new UserAlreadyExistsError()
        }
        try{    
            const user_id = uuid()
            // Set up the S3 upload parameters
            const uploadParams = {
                Bucket: env.AWS_BUCKET_NAME,       // Your S3 bucket name
                Key: `users/user-${user_id}`,           // S3 object name (where to store in the bucket)
                Body: profile_image.buffer,                         // File content
                ContentType: profile_image.mimetype,                // File MIME type (e.g., image/png)
            };

            // Uploading the file to S3
            const s3Image = await s3.upload(uploadParams).promise();
            console.log('S3Image = ',s3Image)
            const user = await this.usersRepository.create({
                id:user_id,email, name, password_hash, username, profile_url: s3Image.Location
            })
    

            // Send Confirmation Email with resend
            await resend_sendConfirmationEmail(user.email, user.id)
    
            return {
                user
            }

        } catch(err){
            console.log(err)
            throw new Error('error on creating user use case')
        }
        
    }

}