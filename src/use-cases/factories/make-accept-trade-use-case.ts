import { PrismaAlbumCardsTradesRepository } from "@/repositories/prisma/prisma-album-cards-trades-repository"
import { AcceptTradeUseCase } from "../trades/acceptTrade"
import { PrismaUserAlbumCardsRepository } from "@/repositories/prisma/prisma-user-album-cards-repository"

export function makeAcceptTradeUseCase(){
    const albunsCardsTradesRepository = new PrismaAlbumCardsTradesRepository()
    const userAlbumCardsTradesRepository = new PrismaUserAlbumCardsRepository()
    const useCase = new AcceptTradeUseCase(albunsCardsTradesRepository,userAlbumCardsTradesRepository)

    return useCase
}