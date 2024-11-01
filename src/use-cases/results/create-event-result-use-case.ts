import { UsersRepository } from "@/repositories/users-repository"
import { hash } from "bcryptjs"
import { UserAlreadyExistsError } from "../errors/user-already-exists-error"
import { EventResults, User } from "@prisma/client"
import { EventsResultsRepository } from "@/repositories/event-results-repository"
import { EventResultAlreadyExistsError } from "../errors/event-result-already-exists-error"
import { CompetitorsRepository } from "@/repositories/competitors-repository"
import { EventsRepository } from "@/repositories/events-repository"
import { EventNotFoundError } from "../errors/event-not-found-error"
import { CompetitorNotFoundError } from "../errors/competitor-not-found-error"

interface CreateEventResulstUseCaseRequest{
    event_id: string,
    competitor_id:string,
    place: string,
    score: number 
}

interface CreateEventResultUseCaseResponse{
    result:EventResults
}

export class CreateEventResultUseCase{

    constructor(
        private eventsResultsRepository:EventsResultsRepository,
        private eventsRepository:EventsRepository, 
        private competitorsRepository:CompetitorsRepository, 
    ){}
    
    async execute({competitor_id,event_id,place, score}:CreateEventResulstUseCaseRequest): Promise<CreateEventResultUseCaseResponse>{

        const eventExits = await this.eventsRepository.findById(event_id)
        if(!eventExits){
            throw new EventNotFoundError()
        }

        const competitorExits = await this.competitorsRepository.findById(competitor_id)
        if(!competitorExits){
            throw new CompetitorNotFoundError()
        }


        const resultAlreadyExists = await this.eventsResultsRepository.findById(competitor_id, event_id)
    
        if(resultAlreadyExists){
            throw new EventResultAlreadyExistsError()
        }
        
        const result = await this.eventsResultsRepository.create({
            competitorId: competitor_id,
            eventId: event_id,
            placing: place,
            score
        })

        return {
            result
        }
    }

}