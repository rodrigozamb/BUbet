import { PrismaAlbumsRepository } from "@/repositories/prisma/prisma-album-repository"
import { GetAlbumCardsByAlbumIdUseCase } from "../album/get-album-cards-by-album-id-use-case"

export function makeGetAlbumCardsByAlbumIdUseCase(){
    const albumRepository = new PrismaAlbumsRepository()
    const useCase = new GetAlbumCardsByAlbumIdUseCase(albumRepository)

    return useCase
}