import { GuessEvent } from "@prisma/client"
import { ResourceNotFoundError } from "../errors/resource-not-found-error"
import { GuessEventsRepository } from "@/repositories/guess-events-repository"

interface FindGuessEventUseCaseRequest{
    event_id:string
}

interface FindGuessEventUseCaseResponse{
    event: GuessEvent
}


export class FindGuessEventUseCase {
    
    
    constructor(
        private eventsRepository: GuessEventsRepository, 
    ){}
    
    async execute({event_id}: FindGuessEventUseCaseRequest): Promise<FindGuessEventUseCaseResponse> {
        
        const event = await this.eventsRepository.findById(event_id)
        
        if(!event){
            throw new ResourceNotFoundError()
        }

        return {
            event
        }
    }

}