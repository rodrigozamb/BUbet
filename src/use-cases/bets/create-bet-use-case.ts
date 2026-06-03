import { Bets } from "@prisma/client"
import { BetsRepository } from "@/repositories/bets-repository"
import { EventsRepository } from "@/repositories/events-repository"
import { UsersRepository } from "@/repositories/users-repository"
import { ResourceNotFoundError } from "../errors/resource-not-found-error"
import { BetAlreadyExistsError } from "../errors/bet-already-exists-error"
import { CuponsRepository } from "@/repositories/cupons-repository"

interface CreateBetUseCaseRequest{
    bets:string[]
    user_id:string
    event_id: string
    cupom?: string
}

interface CreateBetUseCaseResponse{
    bet: Bets
}

export class CreateBetUseCase{

    constructor(
        private betsRepository: BetsRepository,
        private eventsRepository: EventsRepository,
        private usersRepository: UsersRepository,
        private cuponsRepository: CuponsRepository,
    ){}
    
    async execute({bets,event_id,user_id, cupom}:CreateBetUseCaseRequest): Promise<CreateBetUseCaseResponse>{
        const betAlreadyExists = await this.betsRepository.findByIds( user_id,event_id)
        
        if(betAlreadyExists){
            throw new BetAlreadyExistsError()
        }

        const user = await this.usersRepository.findById(user_id)
        if(!user){
            throw new ResourceNotFoundError()
        }

        const event = await this.eventsRepository.findById(event_id)
        if(!event){
            throw new ResourceNotFoundError()
        }

        if(Date.now() > event.starts_at.getTime()){
            throw new Error('Esse evento já começou, não é possível apostar mais nele.')
        }
        
        const bet = await this.betsRepository.create({
            eventId: event_id,
            userId: user_id,
            bets
        })

        if(cupom){
            const cp = await this.cuponsRepository.findById(cupom)
            if(!cp){
                throw new Error('Invalid Cupom')
            }
            await this.cuponsRepository.assignCupomToBet(cupom, user_id,bet.id)
        }

        return {
            bet
        }
    }

}