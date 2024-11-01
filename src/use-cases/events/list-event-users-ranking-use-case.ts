import { EventsRepository } from "@/repositories/events-repository"
import { Bets } from "@prisma/client"

interface ListEventUsersRankingUseCaseRequest{
    event_id:string
}

interface ListEventUsersRankingUseCaseResponse{
    bets: Bets[]
}


export class ListEventUsersRankingUseCase {
    
    
    constructor(
        private eventsRepository: EventsRepository, 
    ){}
    
    async execute({event_id}: ListEventUsersRankingUseCaseRequest): Promise<ListEventUsersRankingUseCaseResponse> {
        
        const bets = await this.eventsRepository.listEventUsersRanking(event_id)

        return {
            bets
        }
    }

}