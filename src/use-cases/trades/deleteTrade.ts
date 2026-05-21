import { AlbumCardsTradesRepository } from "@/repositories/album-cards-trades-repository"

interface DeleteTradeUseCaseRequest{
    from_user_id: string
    trade_id: string
}

interface DeleteTradeUseCaseResponse{
    success: boolean
}

export class DeleteTradeUseCase{

    constructor(
        private albunsCardsTradeRepository: AlbumCardsTradesRepository,
    ){}
    
    async execute({from_user_id, trade_id}:DeleteTradeUseCaseRequest): Promise<DeleteTradeUseCaseResponse>{



        const trade = await this.albunsCardsTradeRepository.getById(trade_id)
        if(!trade || trade.from_user_id !== from_user_id ){
            throw new Error("Trade not found or you don't have permission to delete this trade")
        }
        await this.albunsCardsTradeRepository.deleteTrade(trade_id)
        return {success: true}
    }

}