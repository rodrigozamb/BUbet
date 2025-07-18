import { EventsRepository } from "@/repositories/events-repository"
import { Event } from "@prisma/client"
import { EventNotFoundError } from "../errors/event-not-found-error"
import { v4 as uuid} from 'uuid'
import { env } from "@/env"
import { s3 } from "@/utils/s3"

interface UpdateEventUseCaseRequest{
    data:{
        name:string
        description:string
        date: Date
        local: string
        starts_at: Date
        ends_at: Date,
        
        competitors?:{id:string}[],
        event_banner_types?:{id:string}[]
        judges?: {
            id: string
        }[]
    }
    event_id: string
}

interface UpdateEventUseCaseResponse{
    event: Event
}

export class UpdateEventUseCase{

    constructor(
        private eventsRepository: EventsRepository, 
    ){}
    
    async execute({data, event_id}:UpdateEventUseCaseRequest): Promise<UpdateEventUseCaseResponse>{

        const event = await this.eventsRepository.findById(event_id)
    
        if(!event){
            throw new EventNotFoundError()
        }
        
        
        const updatedEvent = await this.eventsRepository.update(data, event.id)

        return {
            event: updatedEvent
        }
    }

}