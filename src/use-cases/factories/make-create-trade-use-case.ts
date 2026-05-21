import { PrismaUserAlbumCardsRepository } from "@/repositories/prisma/prisma-user-album-cards-repository"
import { CreateTradeUseCase } from "../trades/createTrade"
import { PrismaAlbumCardsTradesRepository } from "@/repositories/prisma/prisma-album-cards-trades-repository"

export function makeCreateTradeUseCase(){
    const albunsCardsTradeRepository = new PrismaAlbumCardsTradesRepository()
    const userAlbumCardsRepository = new PrismaUserAlbumCardsRepository()
    const useCase = new CreateTradeUseCase(albunsCardsTradeRepository, userAlbumCardsRepository)

    return useCase
}