import { AlbumCardsTradesRepository } from "@/repositories/album-cards-trades-repository"
import { UserAlbumCardsRepository } from "@/repositories/user-album-cards-repository"
import { AlbumCardsTrades } from "@prisma/client"

interface CreateTradeUseCaseRequest{
    from_user_id: string
    offered_card_id: string
    offered_quantity: number
    trade_card_id: string
    trade_quantity: number
}

interface CreateTradeUseCaseResponse{
    trade: AlbumCardsTrades
}

export class CreateTradeUseCase{

    constructor(
        private albunsCardsTradeRepository: AlbumCardsTradesRepository,
        private userCardsRepository: UserAlbumCardsRepository, 
    ){}
    
    async execute({from_user_id,offered_card_id, offered_quantity, trade_card_id, trade_quantity}:CreateTradeUseCaseRequest): Promise<CreateTradeUseCaseResponse>{

        if(offered_card_id === trade_card_id){
            throw new Error("Você não poder trocar uma carta por ela mesma")
        }
        if(trade_quantity > 5){
            throw new Error("Limite máximo de 5 cards por troca")
        }
        console.log(from_user_id, offered_card_id)
        const userHasEnoughCards = await this.userCardsRepository.findById(from_user_id, offered_card_id)
        console.log(userHasEnoughCards)
        if(!userHasEnoughCards || userHasEnoughCards.quantity <= offered_quantity || userHasEnoughCards.quantity - offered_quantity <= 0){
            throw new Error("Você não tem a quantidade de cards necessária para realizar essa oferta")
        }
        const trade = await this.albunsCardsTradeRepository.createTrade({from_user_id,offered_card_id, offered_quantity, trade_card_id, trade_quantity})

        return {trade}
    }

}