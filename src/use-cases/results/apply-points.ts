import { EventResults, User } from "@prisma/client"
import { EventsResultsRepository } from "@/repositories/event-results-repository"
import { EventsRepository } from "@/repositories/events-repository"
import { EventNotFoundError } from "../errors/event-not-found-error"

interface ApplyPointsUseCaseRequest{
    event_id: string,
}

interface ApplyPointsUseCaseResponse{
   
}

export class ApplyPointsUseCase{

    constructor(
        private eventsResultsRepository:EventsResultsRepository,
        private eventsRepository:EventsRepository,
    ){}
    
    async execute({event_id}:ApplyPointsUseCaseRequest): Promise<ApplyPointsUseCaseResponse>{

        const eventExits = await this.eventsRepository.findById(event_id)
        if(!eventExits){
            throw new EventNotFoundError()
        }

        
        const result = await this.eventsResultsRepository.applyPoints(event_id)

        return {
        }
    }

}