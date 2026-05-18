import { Album } from "@prisma/client"
import { ResourceNotFoundError } from "../errors/resource-not-found-error"
import { AlbumsRepository } from "@/repositories/albums-repository"

interface GetAlbumByPackIdUseCaseRequest{
    pack_id:string
}

interface GetAlbumByPackIdUseCaseResponse{
    album: Album
}


export class GetAlbumByPackIdUseCase {
    
    
    constructor(
        private albumsRepository: AlbumsRepository,
    ){}
    
    async execute({pack_id}: GetAlbumByPackIdUseCaseRequest): Promise<GetAlbumByPackIdUseCaseResponse> {
        
        const album = await this.albumsRepository.getAlbumByPackId(pack_id)
        
        if(!album){
            throw new ResourceNotFoundError()
        }

        return {
            album
        }
    }

}