import { PrismaAlbumsRepository } from "@/repositories/prisma/prisma-album-repository"
import { GetAlbumByPackIdUseCase } from "../events/get-album-by-pack-id-use-case"


export function makeGetAlbumByPackIdUseCase(){
    const albumsRepository = new PrismaAlbumsRepository()
    const getAlbumByPackIdUseCase = new GetAlbumByPackIdUseCase(albumsRepository)

    return getAlbumByPackIdUseCase
}