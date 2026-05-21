import { PrismaAlbumCardsRepository } from "@/repositories/prisma/prisma-album-cards-repository"
import { GetAllAlbumsCardsUseCase } from "../album/get-all-albums-cards-use-case"

export function makeListAllAlbumsCardsUseCase(){
    const albunsCardsARepository = new PrismaAlbumCardsRepository()
    const useCase = new GetAllAlbumsCardsUseCase(albunsCardsARepository)

    return useCase
}