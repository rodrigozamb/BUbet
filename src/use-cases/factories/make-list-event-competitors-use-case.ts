import { PrismaEventsRepository } from "@/repositories/prisma/prisma-events-repository"
import { ListEventCompetitorsUseCase } from "../events/list-event-competitors-use-case"

export function makeListEventCompetitorsUseCase(){
    const competitorsRepository = new PrismaEventsRepository()
    const getEventUseCase = new ListEventCompetitorsUseCase(competitorsRepository)

    return getEventUseCase
}