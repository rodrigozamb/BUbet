import { EventsRepository } from "@/repositories/events-repository"
import { Event } from "@prisma/client"
import { ResourceNotFoundError } from "../errors/resource-not-found-error"
import { AlbumsRepository } from "@/repositories/albums-repository"

interface GetEventByPackIdUseCaseRequest{
    pack_id:string
}

interface GetEventByPackIdUseCaseResponse{
    event: Event
}


export class GetEventByPackIdUseCase {
    
    
    constructor(
        private albumsRepository: AlbumsRepository,
        private eventsRepository: EventsRepository, 
    ){}
    
    async execute({pack_id}: GetEventByPackIdUseCaseRequest): Promise<GetEventByPackIdUseCaseResponse> {
        
        const album = await this.albumsRepository.getAlbumByPackId(pack_id)
        const event = await this.eventsRepository.findById(album.event_id!)
        
        if(!event){
            throw new ResourceNotFoundError()
        }

        return {
            event
        }
    }

}