import { PrismaUserAlbumPacksRepository } from "@/repositories/prisma/prisma-user-album-packs-repository"
import { ListAllUserAlbumPacksUseCase } from "../userAlbumPacks/list-all-user-album-packs-use-case"


export function makeListAllUserAlbumPacksUseCase(){
    const userAlbumPacksRepository = new PrismaUserAlbumPacksRepository()
    const listAllUserAlbumPacksUseCase = new ListAllUserAlbumPacksUseCase(userAlbumPacksRepository)

    return listAllUserAlbumPacksUseCase
}   