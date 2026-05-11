import { PrismaUserAlbumPacksRepository } from "@/repositories/prisma/prisma-user-album-packs-repository"
import { GetUserAlbumPacksUseCase } from "../userAlbumPacks/get-user-album-packs-use-case"

export function makeGetUserAlbumPacksUseCase(){
    const userAlbumPacksRepository = new PrismaUserAlbumPacksRepository()
    const getUserAlbumPacksUseCase = new GetUserAlbumPacksUseCase(userAlbumPacksRepository)

    return getUserAlbumPacksUseCase 
}       