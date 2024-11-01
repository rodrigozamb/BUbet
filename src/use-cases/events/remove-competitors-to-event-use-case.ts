import { EventsRepository } from "@/repositories/events-repository"
import { Competitor, Event } from "@prisma/client"
import { ResourceNotFoundError } from "../errors/resource-not-found-error"
import { CompetitorsRepository } from "@/repositories/competitors-repository"

interface RemoveCompetitorToEventUseCaseRequest{
    competitors:string[]
    eventId: string
}

interface RemoveCompetitorToEventUseCaseResponse{
    event: Event
}


export class RemoveCompetitorToEventUseCase {
    
    
    constructor(
        private eventsRepository: EventsRepository, 
        private competitorsRepository: CompetitorsRepository, 
    ){}
    
    async execute({competitors,eventId}: RemoveCompetitorToEventUseCaseRequest): Promise<RemoveCompetitorToEventUseCaseResponse> {

        const event = await this.eventsRepository.findById(eventId)

        if(!event){
            throw new ResourceNotFoundError()
        }
        
        const promises:any = []
        competitors.forEach((compId)=>{
            promises.push(this.competitorsRepository.findById(compId))
        })

        var validCompetitors = await Promise.all(promises)
        validCompetitors = validCompetitors.filter(n => n)
        const updatedEvent = await this.eventsRepository.removeCompetitors(validCompetitors, eventId)

        return {
            event: updatedEvent
        }
    }

}