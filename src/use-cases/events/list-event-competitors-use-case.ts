import { EventsRepository } from "@/repositories/events-repository"
import { Competitor, Event } from "@prisma/client"

interface ListEventCompetitorsUseCaseRequest{
    event_id:string
}

interface ListEventCompetitorsUseCaseResponse{
    competitors: Competitor[]
}


export class ListEventCompetitorsUseCase {
    
    
    constructor(
        private eventsRepository: EventsRepository, 
    ){}
    
    async execute({event_id}: ListEventCompetitorsUseCaseRequest): Promise<ListEventCompetitorsUseCaseResponse> {
        
        const competitors = await this.eventsRepository.findEventCompetitors(event_id)

        return {
            competitors
        }
    }

}