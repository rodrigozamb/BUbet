import { AlbumCardsTradesRepository } from "@/repositories/album-cards-trades-repository"
import { AlbumCardsTrades } from "@prisma/client"

interface ListTradesUseCaseRequest{
}

interface ListTradesUseCaseResponse{
    trades: AlbumCardsTrades[]
}

export class ListTradesUseCase{

    constructor(
        private albunsCardsTradeRepository: AlbumCardsTradesRepository,
    ){}
    
    async execute({}:ListTradesUseCaseRequest): Promise<ListTradesUseCaseResponse>{

        const trades = await this.albunsCardsTradeRepository.listCardsTrades()

        return {trades}
    }

}