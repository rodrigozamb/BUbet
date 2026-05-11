
import { AlbumCards } from "@prisma/client"
import { AlbumCardsRepository } from "@/repositories/album-cards-repository"
import { UserAlbumCardsRepository } from "@/repositories/user-album-cards-repository"
import { UserAlbumPacksRepository } from "@/repositories/user-album-packs-repository"


interface OpenCardPackUseCaseResponse{
    cards: AlbumCards[]
}

interface OpenCardPackUseCaseRequest{
    pack_id: string
    user_id: string
}

export class OpenCardPackUseCase {
    
    constructor(
        private cardPacksRepository: AlbumCardsRepository, 
        private userAlbumCardsRepository: UserAlbumCardsRepository,
        private userAlbumPacksRepository: UserAlbumPacksRepository 
    ){}
    
    async execute({ pack_id, user_id }: OpenCardPackUseCaseRequest): Promise<OpenCardPackUseCaseResponse> {

       const userHasPack = await this.userAlbumPacksRepository.checkUserHasPack(user_id, pack_id)
        if (!userHasPack) {
            throw new Error("Você não possui pacotes deste álbum para abrir")
        }
        const user_pack = await this.userAlbumPacksRepository.findByPackId(pack_id, user_id)

        const cardPacks = await this.cardPacksRepository.openCardPack(user_pack!.card_pack_id)
        await this.userAlbumCardsRepository.assignCardsToUser(user_id, cardPacks.map(card => card.id))
        await this.userAlbumPacksRepository.decrementPackQuantity(user_id, user_pack!.card_pack_id)

        return {
            cards: cardPacks
        }
    }

}   