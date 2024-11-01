import { EventsRepository } from "@/repositories/events-repository"
import { Event } from "@prisma/client"
import { UserAlreadyExistsError } from "../errors/user-already-exists-error"
import { EventAlreadyExistsError } from "../errors/event-already-exists-error"
import { v4 as uuid} from 'uuid'
import { env } from "@/env"
import { s3 } from "@/utils/s3"

interface CreateEventUseCaseRequest{
    name:string
    description:string
    date: Date
    judges: string[]
    starts_at: Date
    ends_at: Date,
    banner: any
}

interface CreateEventUseCaseResponse{
    event: Event
}

export class CreateEventUseCase{

    constructor(
        private eventsRepository: EventsRepository, 
    ){}
    
    async execute({date,description,ends_at,judges,name,starts_at, banner}:CreateEventUseCaseRequest): Promise<CreateEventUseCaseResponse>{

        const eventWithSameName = await this.eventsRepository.findByName(name)
    
        if(eventWithSameName){
            throw new EventAlreadyExistsError()
        }
        const event_id = uuid()
            // Set up the S3 upload parameters
            const uploadParams = {
                Bucket: env.AWS_BUCKET_NAME,       // Your S3 bucket name
                Key: `events/event-${event_id}`,           // S3 object name (where to store in the bucket)
                Body: banner.buffer,                         // File content
                ContentType: banner.mimetype,                // File MIME type (e.g., image/png)
            };

            // Uploading the file to S3
            const s3Image = await s3.upload(uploadParams).promise();
            
        const event = await this.eventsRepository.create({
            id: event_id,
            date,
            description,
            ends_at,
            judges,
            name,
            starts_at,
            banner: s3Image.Location
        })

        return {
            event
        }
    }

}