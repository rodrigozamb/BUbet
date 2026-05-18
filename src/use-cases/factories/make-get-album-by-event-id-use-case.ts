import { PrismaAlbumsRepository } from "@/repositories/prisma/prisma-album-repository";
import { GetAlbumByEventIdUseCase } from "../album/get-album-by-event-id-use-case";


export function makeGetAlbumByEventIDUseCase(){
    const albumsRepository = new PrismaAlbumsRepository()
    const useCase = new GetAlbumByEventIdUseCase(albumsRepository)

    return useCase
}