import { PrismaAlbumCardsTradesRepository } from "@/repositories/prisma/prisma-album-cards-trades-repository"
import { ListTradesUseCase } from "../trades/listTrades"

export function makeListTradesUseCase(){
    const albunsCardsTradesRepository = new PrismaAlbumCardsTradesRepository()
    const useCase = new ListTradesUseCase(albunsCardsTradesRepository)

    return useCase
}