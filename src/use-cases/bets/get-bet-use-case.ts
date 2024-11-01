
import { Bets } from "@prisma/client"
import { ResourceNotFoundError } from "../errors/resource-not-found-error"
import { BetsRepository } from "@/repositories/bets-repository"
import { UsersRepository } from "@/repositories/users-repository"
import { EventsRepository } from "@/repositories/events-repository"

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

        return {
            bet
        }
    }

}