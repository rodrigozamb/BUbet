import { EventResults } from "@prisma/client"
import { EventsResultsRepository } from "@/repositories/event-results-repository"
import { EventsRepository } from "@/repositories/events-repository"
import { EventNotFoundError } from "../errors/event-not-found-error"

interface ListEventResulstUseCaseRequest{
    event_id: string,
}

interface ListEventResultUseCaseResponse{
    result:EventResults[] 
}

export class ListEventResultUseCase{

    constructor(
        private eventsResultsRepository:EventsResultsRepository,
        private eventsRepository:EventsRepository, 
    ){}
    
    async execute({event_id}:ListEventResulstUseCaseRequest): Promise<ListEventResultUseCaseResponse>{
        
        const eventExits = await this.eventsRepository.findById(event_id)
        if(!eventExits){
            throw new EventNotFoundError()
        }
        
        
        const results = await this.eventsResultsRepository.findByEventId(event_id)
        if(results){
            return {result: results}
        }
        else return {result:[]}
    }

}