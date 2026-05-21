import { AlbumCardsTradesRepository } from "@/repositories/album-cards-trades-repository"
import { UserAlbumCardsRepository } from "@/repositories/user-album-cards-repository"
import { AlbumCardsTrades } from "@prisma/client"

interface AcceptTradeUseCaseRequest{
    trade_id: string,
    to_user_id: string
}

interface AcceptTradeUseCaseResponse{
    trade: AlbumCardsTrades
}

export class AcceptTradeUseCase{

    constructor(
        private albunsCardsTradeRepository: AlbumCardsTradesRepository,
        private userCardsRepository: UserAlbumCardsRepository, 
    ){}
    
    async execute({to_user_id, trade_id}:AcceptTradeUseCaseRequest): Promise<AcceptTradeUseCaseResponse>{

        const trade = await this.albunsCardsTradeRepository.getById(trade_id)
        if(!trade || trade.traded_at){
            throw new Error("Trade not found or already accepted")
        }

        const from_userHasEnoughCards = await this.userCardsRepository.findById(trade.from_user_id, trade.offered_card_id)
        console.log(from_userHasEnoughCards)

        if(!from_userHasEnoughCards || from_userHasEnoughCards.quantity < trade.offered_quantity || from_userHasEnoughCards.quantity - trade.offered_quantity <= 0){
            throw new Error("O Outro usuário não tem a quantidade de cards necessária para realizar essa oferta")
        }
        
        const to_userHasEnoughCards = await this.userCardsRepository.findById(to_user_id, trade.trade_card_id)
        console.log(to_userHasEnoughCards)

        if(!to_userHasEnoughCards || to_userHasEnoughCards.quantity < trade.trade_quantity || to_userHasEnoughCards.quantity - trade.trade_quantity <= 0){
            throw new Error("Você não tem a quantidade de cards necessária para realizar essa oferta")
        }
        
        await this.albunsCardsTradeRepository.acceptTrade(trade_id, to_user_id)

        return {trade}
    }

}