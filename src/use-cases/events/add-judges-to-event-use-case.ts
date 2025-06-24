import { EventsRepository } from "@/repositories/events-repository"
import { Event } from "@prisma/client"
import { ResourceNotFoundError } from "../errors/resource-not-found-error"
import { JudgesRepository } from "@/repositories/judges-repository"

interface AddJudgeToEventUseCaseRequest{
    judges:string[]
    eventId: string
}

interface AddJudgeToEventUseCaseResponse{
    event: Event
}


export class AddJudgeToEventUseCase {
    
    
    constructor(
        private eventsRepository: EventsRepository, 
        private judgesRepository: JudgesRepository, 
    ){}
    
    async execute({judges,eventId}: AddJudgeToEventUseCaseRequest): Promise<AddJudgeToEventUseCaseResponse> {

        const event = await this.eventsRepository.findById(eventId)

        if(!event){
            throw new ResourceNotFoundError()
        }
        
        const promises:any = []
        judges.forEach((compId)=>{
            promises.push(this.judgesRepository.findById(compId))
        })
        var validJudges = await Promise.all(promises)
        validJudges = validJudges.filter(n => n)

        const updatedEvent = await this.eventsRepository.addJudges(validJudges, eventId)

        return {
            event: updatedEvent
        }
    }

}