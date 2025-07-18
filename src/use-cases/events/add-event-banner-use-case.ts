import { EventsRepository } from "@/repositories/events-repository"
import { Event } from "@prisma/client"
import { EventNotFoundError } from "../errors/event-not-found-error"
import { v4 as uuid} from 'uuid'
import { env } from "@/env"
import { s3 } from "@/utils/s3"

interface AddEventBannerUseCaseRequest{
    banner: any
    event_id: string
}

interface AddEventBannerUseCaseResponse{
    event: Event
}

export class AddEventBannerUseCase{

    constructor(
        private eventsRepository: EventsRepository, 
    ){}
    
    async execute({banner, event_id}:AddEventBannerUseCaseRequest): Promise<AddEventBannerUseCaseResponse>{

        const event = await this.eventsRepository.findById(event_id)
    
        if(!event){
            throw new EventNotFoundError()
        }
        
        // Set up the S3 upload parameters
        const uploadParams = {
            Bucket: env.AWS_BUCKET_NAME,       // Your S3 bucket name
            Key: `events/event-${event_id}`,           // S3 object name (where to store in the bucket)
            Body: banner.buffer,                         // File content
            ContentType: banner.mimetype,                // File MIME type (e.g., image/png)
        };

        // Uploading the file to S3
        const s3Image = await s3.upload(uploadParams).promise();
        
        const updatedEvent = await this.eventsRepository.update({ banner: s3Image.Location }, event.id)

        return {
            event: updatedEvent
        }
    }

}