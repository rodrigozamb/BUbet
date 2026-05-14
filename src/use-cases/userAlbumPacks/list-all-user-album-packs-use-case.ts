import { UserAlbumCardsRepository } from "@/repositories/user-album-cards-repository"
import { UserAlbumPacksRepository } from "@/repositories/user-album-packs-repository"
import { UserAlbumCards, UserAlbumPacks } from "@prisma/client"

interface ListAllUserAlbumPacksUseCaseRequest{
    user_id: string
}

interface ListAllUserAlbumPacksUseCaseResponse{
    packs: UserAlbumPacks[]
    cards: UserAlbumCards[]
}


export class ListAllUserAlbumPacksUseCase {
    
    
    constructor(
        private userAlbumPacksRepository: UserAlbumPacksRepository, 
        private userAlbumCardsRepository: UserAlbumCardsRepository
    ){}
    
    async execute({user_id}: ListAllUserAlbumPacksUseCaseRequest): Promise<ListAllUserAlbumPacksUseCaseResponse> {
        
        const newPacks = await this.userAlbumPacksRepository.listAllByUserId(user_id)
        const userCards = await this.userAlbumCardsRepository.listAllByUserId(user_id)
        return {
            packs: newPacks,
            cards: userCards
        }
    }

}