import { AlbumsRepository } from "@/repositories/albums-repository"
import { Album, AlbumCards, UserAlbumCards } from "@prisma/client"

interface GetAlbumCardsByAlbumIdUseCaseRequest{
    album_id: string,
}

interface GetAlbumCardsByAlbumIdUseCaseResponse{
    cards: AlbumCards[]
}


export class GetAlbumCardsByAlbumIdUseCase {
    
    constructor(
        private albumRepository: AlbumsRepository
    ){}
    
    async execute( { album_id }:GetAlbumCardsByAlbumIdUseCaseRequest ): Promise<GetAlbumCardsByAlbumIdUseCaseResponse> {

        const album = await this.albumRepository.getAlbumById( album_id )
        if(!album){
            throw new Error("Album not found")
        }

        const albumWithPages = album as Album & { pages: { cards: AlbumCards[] }[] }
        const cards = albumWithPages.pages.flatMap(page => page.cards)

        return {
            cards
        }
    }

}