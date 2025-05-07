import { FeedbacksRepository } from "@/repositories/feedbacks-repository";
import { Feedback } from "@prisma/client";
import { UserNotFoundError } from "../errors/user-not-found-error";
import { UsersRepository } from "@/repositories/users-repository";
import {v4 as uuid} from "uuid"
import { env } from './../../env'
import { s3 } from "@/utils/s3";

interface CreateFeedbackUseCaseRequest{
    userId: string
    content: string
    image: any
}

interface CreateFeedbackUseCaseResponse{
    feedback: Feedback
}

export class CreateFeedbackUseCase{

    constructor(
        private feedbacksRepository: FeedbacksRepository,
        private usersRepository: UsersRepository
    ){}

    async execute({content,image,userId}:CreateFeedbackUseCaseRequest):Promise<CreateFeedbackUseCaseResponse>{
        
        const user = await this.usersRepository.findById(userId)
        if(!user){
            throw new UserNotFoundError() 
        }

        try{    
            const feedback_id = uuid()
            let imageUrl = null

            // Set up the S3 upload parameter
            if (image.fieldname != undefined){

                const uploadParams = {
                    Bucket: env.AWS_BUCKET_NAME,       // Your S3 bucket name
                    Key: `feedbacks/${feedback_id}`,           // S3 object name (where to store in the bucket)
                    Body: image.buffer,                         // File content
                    ContentType: image.mimetype,                // File MIME type (e.g., image/png)
                };
                // Uploading the file to S3
                const s3Image = await s3.upload(uploadParams).promise();
                imageUrl = s3Image.Location
            }


            const createdFeedback = await this.feedbacksRepository.create({
                id:feedback_id, userId, content, image: imageUrl
            })

    
            return {
                feedback: createdFeedback
            }

        } catch(err){
            console.log(err)
            throw new Error('error on creating feedback use case')
        }
    }
}