import { EventsRepository } from "@/repositories/events-repository"
import { Event } from "@prisma/client"
import { ResourceNotFoundError } from "../errors/resource-not-found-error"

interface FindEventUseCaseRequest{
    event_id:string
}

interface FindEventUseCaseResponse{
    event: Event
}


export class FindEventUseCase {
    
    
    constructor(
        private eventsRepository: EventsRepository, 
    ){}
    
    async execute({event_id}: FindEventUseCaseRequest): Promise<FindEventUseCaseResponse> {
        
        const event = await this.eventsRepository.findById(event_id)
        
        if(!event){
            throw new ResourceNotFoundError()
        }

        return {
            event
        }
    }

}