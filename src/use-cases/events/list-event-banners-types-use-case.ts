import { BannerType } from "@prisma/client"
import { ResourceNotFoundError } from "../errors/resource-not-found-error"
import { EventsRepository } from "@/repositories/events-repository"

interface ListEventBannersTypesUseCaseRequest{
    event_id:string
}

interface ListEventBannersTypesUseCaseResponse{
    estandartes: BannerType[]
}


export class ListEventBannersTypesUseCase {
    
    
    constructor(
        private eventsRepository: EventsRepository
    ){}
    
    async execute({event_id}: ListEventBannersTypesUseCaseRequest): Promise<ListEventBannersTypesUseCaseResponse> {

        const estandartes = await this.eventsRepository.listEventGoldenBannersTypes(event_id)

        if(!estandartes){
            return{
                estandartes: []
            }
        }
        
        
        return {
            estandartes
        }
        
    }


}