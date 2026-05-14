import { PrismaUserAlbumPacksRepository } from "@/repositories/prisma/prisma-user-album-packs-repository"
import { ListAllUserAlbumPacksUseCase } from "../userAlbumPacks/list-all-user-album-packs-use-case"
import { PrismaUserAlbumCardsRepository } from "@/repositories/prisma/prisma-user-album-cards-repository"


export function makeListAllUserAlbumPacksUseCase(){
    const userAlbumPacksRepository = new PrismaUserAlbumPacksRepository()
    const userAlbumCardsRepository = new PrismaUserAlbumCardsRepository()
    const listAllUserAlbumPacksUseCase = new ListAllUserAlbumPacksUseCase(userAlbumPacksRepository, userAlbumCardsRepository)

    return listAllUserAlbumPacksUseCase
}   