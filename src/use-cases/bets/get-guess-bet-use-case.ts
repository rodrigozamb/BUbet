
import { GuessBets } from "@prisma/client"
import { ResourceNotFoundError } from "../errors/resource-not-found-error"
import { UsersRepository } from "@/repositories/users-repository"
import { GuessBetsRepository } from "@/repositories/guess-bets-repository"
import { GuessEventsRepository } from "@/repositories/guess-events-repository"

interface GetGuessBetUseCaseRequest{
    user_id: string,
    event_id: string
}

interface GetGuessBetUseCaseResponse{
    bet: GuessBets | null
}


export class GetGuessBetUseCase {
    
    
    constructor(
        private betsRepository: GuessBetsRepository, 
        private usersRepository: UsersRepository, 
        private eventsRepository: GuessEventsRepository, 
    ){}
    
    async execute({event_id,user_id}: GetGuessBetUseCaseRequest): Promise<GetGuessBetUseCaseResponse> {
        
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

        return {
            bet
        }
    }

}