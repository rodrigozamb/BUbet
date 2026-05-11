import { PrismaUserAlbumPacksRepository } from "@/repositories/prisma/prisma-user-album-packs-repository"
import { AddAlbumPackToUserUseCase } from "../userAlbumPacks/add-album-pack-to-user-use-case"


export function makeAddAlbumPackToUserUseCase(){
    const userAlbumPacksRepository = new PrismaUserAlbumPacksRepository()
    
    const addBannerTypeToEventUseCase = new AddAlbumPackToUserUseCase(userAlbumPacksRepository)

    return addBannerTypeToEventUseCase
}