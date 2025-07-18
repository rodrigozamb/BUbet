import { EventsRepository } from "@/repositories/events-repository"
import { Event } from "@prisma/client"
import { ResourceNotFoundError } from "../errors/resource-not-found-error"
import { BannerTypesRepository } from "@/repositories/banner-types-respository"

interface AddBannerTypeToEventUseCaseRequest{
    bannerTypes:string[]
    eventId: string
}

interface AddBannerTypeToEventUseCaseResponse{
    event: Event
}


export class AddBannerTypesToEventUseCase {
    
    
    constructor(
        private eventsRepository: EventsRepository, 
        private bannerTypesRepository: BannerTypesRepository, 
    ){}
    
    async execute({bannerTypes,eventId}: AddBannerTypeToEventUseCaseRequest): Promise<AddBannerTypeToEventUseCaseResponse> {

        const event = await this.eventsRepository.findById(eventId)

        if(!event){
            throw new ResourceNotFoundError()
        }
        
        const promises:any = []
        bannerTypes.forEach((compId)=>{
            promises.push(this.bannerTypesRepository.findById(compId))
        })
        var validBannerTypes = await Promise.all(promises)
        validBannerTypes = validBannerTypes.filter(n => n)

        const updatedEvent = await this.eventsRepository.addGoldenBannersTypes(eventId, validBannerTypes)

        return {
            event: updatedEvent
        }
    }

}