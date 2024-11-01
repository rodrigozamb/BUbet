
import { Bets } from "@prisma/client"
import { ResourceNotFoundError } from "../errors/resource-not-found-error"
import { BetsRepository } from "@/repositories/bets-repository"
import { UsersRepository } from "@/repositories/users-repository"
import { CompetitorsRepository } from "@/repositories/competitors-repository"

interface ListUserBetsCaseRequest{
    user_id:string
}

interface ListUserBetsCaseResponse{
    bets: Bets[]
}


export class ListUserBetsCase {
    
    constructor(
        private betsRepository: BetsRepository, 
        private usersRepository: UsersRepository,
        private competitorsRepository: CompetitorsRepository, 
    ){}
    
    async execute({user_id}: ListUserBetsCaseRequest): Promise<ListUserBetsCaseResponse> {
        
        const user = await this.usersRepository.findById(user_id)
        
        if(!user){
            throw new ResourceNotFoundError()
        }

        const bets = await this.betsRepository.listUserBets(user_id)
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
            bets
        }
    }

}