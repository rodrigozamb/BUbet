import { UsersRepository } from "@/repositories/users-repository"
import { Bets, User } from "@prisma/client"
import { ResourceNotFoundError } from "../errors/resource-not-found-error"
import { EventsRepository } from "@/repositories/events-repository"
import { CompetitorsRepository } from "@/repositories/competitors-repository"

interface ListEventBetsUseCaseRequest{
    event_id:string
}

interface ListEventBetsUseCaseResponse{
    bets: Bets[]
}


export class ListEventBetsUseCase {
    
    
    constructor(
        private eventsRepository: EventsRepository,
        private competitorsRepository: CompetitorsRepository 
    ){}
    
    async execute({event_id}: ListEventBetsUseCaseRequest): Promise<ListEventBetsUseCaseResponse> {

        const bets = await this.eventsRepository.findEventBets(event_id)

        if(!bets){
            throw new ResourceNotFoundError()
        }
        
        const competitors = await this.competitorsRepository.findAll()
        
        const competitorsMap = new Map()
        competitors.map((competitor)=>{
            competitorsMap.set(competitor.id, competitor)
        })

        for (let i = 0; i < bets.length; i++) {
            
            const res = bets[i].bets.map((bet)=>{
                return competitorsMap.get(bet)
            })

            bets[i].bets = res
            
        }
        return {
            bets: bets
        }
        
    }


}