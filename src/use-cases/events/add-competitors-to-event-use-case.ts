import { EventsRepository } from "@/repositories/events-repository"
import { Competitor, Event } from "@prisma/client"
import { ResourceNotFoundError } from "../errors/resource-not-found-error"
import { CompetitorsRepository } from "@/repositories/competitors-repository"

interface AddCompetitorToEventUseCaseRequest{
    competitors:string[]
    eventId: string
}

interface AddCompetitorToEventUseCaseResponse{
    event: Event
}


export class AddCompetitorToEventUseCase {
    
    
    constructor(
        private eventsRepository: EventsRepository, 
        private competitorsRepository: CompetitorsRepository, 
    ){}
    
    async execute({competitors,eventId}: AddCompetitorToEventUseCaseRequest): Promise<AddCompetitorToEventUseCaseResponse> {

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


        const updatedEvent = await this.eventsRepository.addCompetitors(validCompetitors, eventId)

        return {
            event: updatedEvent
        }
    }

}