
import { Bets } from "@prisma/client"
import { ResourceNotFoundError } from "../errors/resource-not-found-error"
import { BetsRepository } from "@/repositories/bets-repository"
import { UsersRepository } from "@/repositories/users-repository"
import { EventsRepository } from "@/repositories/events-repository"
import { CompetitorsRepository } from "@/repositories/competitors-repository"

interface GetBetUseCaseRequest{
    user_id: string,
    event_id: string
}

interface GetBetUseCaseResponse{
    bet: Bets | null
}


export class GetBetUseCase {
    
    
    constructor(
        private betsRepository: BetsRepository, 
        private usersRepository: UsersRepository, 
        private eventsRepository: EventsRepository, 
        private competitorsRepository: CompetitorsRepository, 
    ){}
    
    async execute({event_id,user_id}: GetBetUseCaseRequest): Promise<GetBetUseCaseResponse> {
        
        const user = await this.usersRepository.findById(user_id)
        if(!user){
            throw new ResourceNotFoundError()
        }

        const event = await this.eventsRepository.findById(event_id)
        if(!event){

            throw new ResourceNotFoundError()
        }
        
        const bet = await this.betsRepository.findByIds(user_id, event_id)
        if(!bet){
            return {
                bet: null
            }
        }

        const competitors = await this.competitorsRepository.findAll()
        
        const competitorsMap = new Map()
        competitors.map((competitor)=>{
            competitorsMap.set(competitor.id, competitor)
        })

        const new_bets = bet.bets.map((bet)=>{
            return competitorsMap.get(bet)
        })
        bet.bets = new_bets

        return {
            bet
        }
    }

}