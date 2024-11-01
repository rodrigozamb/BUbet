import { PrismaEventsRepository } from "@/repositories/prisma/prisma-events-repository"
import { FindEventUseCase } from "../events/find-event-use-case"


export function makeGetEventUseCase(){
    const competitorsRepository = new PrismaEventsRepository()
    const getEventUseCase = new FindEventUseCase(competitorsRepository)

    return getEventUseCase
}