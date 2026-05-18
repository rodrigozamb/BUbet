import { PrismaAlbumsRepository } from "@/repositories/prisma/prisma-album-repository"
import { PrismaEventsRepository } from "@/repositories/prisma/prisma-events-repository"
import { GetEventByPackIdUseCase } from "../events/get-event-by-pack-id-use-case"


export function makeGetEventByPackIdUseCase(){
    const albumsRepository = new PrismaAlbumsRepository()
    const eventsRepository = new PrismaEventsRepository()
    const getEventByPackIdUseCase = new GetEventByPackIdUseCase(albumsRepository, eventsRepository)

    return getEventByPackIdUseCase
}