import { EventsRepository } from "@/repositories/events-repository"
import { Event } from "@prisma/client"

interface ListEventsUseCaseRequest{

}

interface ListEventsUseCaseResponse{
    events: Event[]
}


export class ListEventsUseCase {
    
    
    constructor(
        private eventsRepository: EventsRepository, 
    ){}
    
    async execute({}: ListEventsUseCaseRequest): Promise<ListEventsUseCaseResponse> {
        
        const events = await this.eventsRepository.listActiveEvents()

        return {
            events
        }
    }

}