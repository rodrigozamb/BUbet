import { GuessBets } from "@prisma/client"
import { UsersRepository } from "@/repositories/users-repository"
import { ResourceNotFoundError } from "../errors/resource-not-found-error"
import { BetAlreadyExistsError } from "../errors/bet-already-exists-error"
import { GuessBetsRepository } from "@/repositories/guess-bets-repository"
import { GuessEventsRepository } from "@/repositories/guess-events-repository"

interface CreateGuessBetUseCaseRequest{
    guess:number
    user_id:string
    event_id: string
}

interface CreateGuessBetUseCaseResponse{
    bet: GuessBets
}

export class CreateGuessBetUseCase{

    constructor(
        private betsRepository: GuessBetsRepository,
        private eventsRepository: GuessEventsRepository,
        private usersRepository: UsersRepository,
    ){}
    
    async execute({guess, event_id,user_id}:CreateGuessBetUseCaseRequest): Promise<CreateGuessBetUseCaseResponse>{
        
        const betAlreadyExists = await this.betsRepository.findByIds( user_id,event_id)
        if(betAlreadyExists){
            throw new BetAlreadyExistsError()
        }

        const user = await this.usersRepository.findById(user_id)
        if(!user){
            throw new ResourceNotFoundError()
        }

        const event = await this.eventsRepository.findById(event_id)
        if(!event || guess >= event.guess_options.length){
            throw new ResourceNotFoundError()
        }
        console.log(event.guess_options[guess], event_id,user_id)
        const bet = await this.betsRepository.create({
            guessEventId: event_id,
            userId: user_id,
            guess: event.guess_options[guess]
        })

        return {
            bet
        }
    }

}