import { GuessEventsRepository } from "@/repositories/guess-events-repository"
import { GuessEvent } from "@prisma/client"

interface ListGuessEventsUseCaseRequest{

}

interface ListGuessEventsUseCaseResponse{
    events: GuessEvent[]
}


export class ListGuessEventsUseCase {
    
    
    constructor(
        private eventsRepository: GuessEventsRepository, 
    ){}
    
    async execute({}: ListGuessEventsUseCaseRequest): Promise<ListGuessEventsUseCaseResponse> {
        
        const events = await this.eventsRepository.listActiveGuessEvents()

        return {
            events
        }
    }

}