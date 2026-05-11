import { PrismaAlbumCardsRepository } from "@/repositories/prisma/prisma-album-cards-repository";
import { OpenCardPackUseCase } from "../cardPacks/open-card-pack-use-pack-use-case";
import { PrismaUserAlbumCardsRepository } from "@/repositories/prisma/prisma-user-album-cards-repository";
import { PrismaUserAlbumPacksRepository } from "@/repositories/prisma/prisma-user-album-packs-repository";


export function makeOpenCardPackUseCase(){
    const albumCardsRepository = new PrismaAlbumCardsRepository()
    const userAlbumCardsRepository = new PrismaUserAlbumCardsRepository()
    const userAlbumPacksRepository = new PrismaUserAlbumPacksRepository()
    
    const openCardPackUseCase = new OpenCardPackUseCase(albumCardsRepository, userAlbumCardsRepository, userAlbumPacksRepository)

    return openCardPackUseCase
}