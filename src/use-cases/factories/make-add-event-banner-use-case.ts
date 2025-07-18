import { PrismaEventsRepository } from "@/repositories/prisma/prisma-events-repository"
import { AddEventBannerUseCase } from "../events/add-event-banner-use-case"

export function makeAddBannerUseCase(){
    const eventRepository = new PrismaEventsRepository()
    const useCase = new AddEventBannerUseCase(eventRepository)

    return useCase
}