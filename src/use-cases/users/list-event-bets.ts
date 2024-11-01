import { UsersRepository } from "@/repositories/users-repository"
import { Bets, User } from "@prisma/client"
import { ResourceNotFoundError } from "../errors/resource-not-found-error"
import { EventsRepository } from "@/repositories/events-repository"

interface ListEventBetsCaseRequest{
    event_id:string
}

interface ListEventBetsCaseResponse{
    bets: Bets[]
}


export class ListEventBetsCase {
    
    
    constructor(
        private eventsRepository: EventsRepository, 
    ){}
    
    async execute({event_id}: ListEventBetsCaseRequest): Promise<ListEventBetsCaseResponse> {

        const bets = await this.eventsRepository.findEventBets(event_id)

        if(!bets){
            throw new ResourceNotFoundError()
        }
        
        return {
            bets: bets
        }
        
    }


}