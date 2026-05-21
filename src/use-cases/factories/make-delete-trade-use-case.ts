import { PrismaAlbumCardsTradesRepository } from "@/repositories/prisma/prisma-album-cards-trades-repository"
import { DeleteTradeUseCase } from "../trades/deleteTrade"

export function makeDeleteTradeUseCase(){
    const albunsCardsTradesRepository = new PrismaAlbumCardsTradesRepository()
    const useCase = new DeleteTradeUseCase(albunsCardsTradesRepository)

    return useCase
}