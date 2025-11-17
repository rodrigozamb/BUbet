import { UsersRepository } from "@/repositories/users-repository"
import { hash } from "bcryptjs"
import { UserAlreadyExistsError } from "../errors/user-already-exists-error"
import { User } from "@prisma/client"
import { UserNotFoundError } from "../errors/user-not-found-error"
import { env } from './../../env'
import { s3 } from "@/utils/s3"

interface UpdateUserUseCaseRequest{
    user_id: string
    name:string  | undefined
    email:string | undefined
    username: string  | undefined
    password: string  | undefined
    profile_image: any | undefined
}

interface UpdateUserUseCaseResponse{
    user: User
}

export class UpdateUserUseCase{

    constructor(
        private usersRepository: UsersRepository, 
    ){}
    
    async execute({email,name,username,password, user_id, profile_image}:UpdateUserUseCaseRequest): Promise<UpdateUserUseCaseResponse>{

        const userExists = await this.usersRepository.findById(user_id)
        if(!userExists){
            throw new UserNotFoundError()
        }
        var userWithSameEmail
        if(email){

            userWithSameEmail = await this.usersRepository.findByEmail(email)
            if (userWithSameEmail){
                throw new UserAlreadyExistsError()
            }
        }
    
        var password_hash
        if(password){
            password_hash = await hash(password, 6)
        }

        if(profile_image.buffer){
            const uploadParams = {
                Bucket: env.AWS_BUCKET_NAME,       // Your S3 bucket name
                Key: `users/user-${user_id}`,           // S3 object name (where to store in the bucket)
                Body: profile_image.buffer,                         // File content
                ContentType: profile_image.mimetype,                // File MIME type (e.g., image/png)
            };

            // Uploading the file to S3
            const s3Image = await s3.upload(uploadParams).promise();
            console.log('S3Image = ',s3Image)
            const new_profile_image = s3Image

            const user = await this.usersRepository.update(user_id,{email,name,password_hash,username,profile_url: new_profile_image.Location})
            return {
                user
            }
        }else{

            const user = await this.usersRepository.update(user_id,{email,name,password_hash,username})
            return {
                user
            }
        }

    }

}