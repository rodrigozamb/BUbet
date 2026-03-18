import { GuessBets } from "@prisma/client"
import { GuessEventsRepository } from "@/repositories/guess-events-repository"

interface ListGuessEventBetsUseCaseRequest{
    event_id:string
}

interface ListGuessEventBetsUseCaseResponse{
    bets: GuessBets[]
}


export class ListGuessEventBetsUseCase {
    
    
    constructor(
        private eventsRepository: GuessEventsRepository
    ){}
    
    async execute({event_id}: ListGuessEventBetsUseCaseRequest): Promise<ListGuessEventBetsUseCaseResponse> {

        const bets = await this.eventsRepository.findGuessEventBets(event_id)

        if(!bets){
            return {
                bets: []
            }
        }
        
       
        return {
            bets: bets
        }
        
    }


}