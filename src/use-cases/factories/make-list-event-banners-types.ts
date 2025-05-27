import { PrismaEventsRepository } from "@/repositories/prisma/prisma-events-repository";
import { ListEventBannersTypesUseCase } from "../events/list-event-banners-types-use-case";

export function makeListEventBannersTYpesUseCase(){
    const eventsRepository = new PrismaEventsRepository()
    
    const useCase = new ListEventBannersTypesUseCase(eventsRepository)

    return useCase
}