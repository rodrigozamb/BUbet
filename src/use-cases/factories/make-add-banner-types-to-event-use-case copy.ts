import { PrismaEventsRepository } from "@/repositories/prisma/prisma-events-repository";
import { AddBannerTypesToEventUseCase } from "../events/add-banner-types-to-event-use-case";
import { PrismaBannerTypesRepository } from "@/repositories/prisma/prisma-banner-types-repository";


export function makeAddBannerTypesToEventUseCase(){
    const eventRepository = new PrismaEventsRepository()
    const bannerTypesRepository = new PrismaBannerTypesRepository()
    
    const addBannerTypeToEventUseCase = new AddBannerTypesToEventUseCase(eventRepository,bannerTypesRepository)

    return addBannerTypeToEventUseCase
}