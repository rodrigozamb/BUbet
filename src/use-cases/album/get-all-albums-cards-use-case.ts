import { AlbumCardsRepository } from "@/repositories/album-cards-repository"
import { AlbumCards } from "@prisma/client"

interface GetAllAlbumsCardsUseCaseRequest{
}

interface GetAllAlbumsCardsUseCaseResponse{
    cards: AlbumCards[]
}


export class GetAllAlbumsCardsUseCase {
    
    constructor(
        private albumCardsRepository: AlbumCardsRepository
    ){}
    
    async execute( {  }:GetAllAlbumsCardsUseCaseRequest ): Promise<GetAllAlbumsCardsUseCaseResponse> {

        const cards = await this.albumCardsRepository.listAll(  )
        return {
            cards
        }
    }

}