import { PrismaEventsRepository } from "@/repositories/prisma/prisma-events-repository";
import { ListEventBetsUseCase } from "../events/list-event-bets-use-case";
import { PrismaCompetitorsRepository } from "@/repositories/prisma/prisma-competitors-repository";

export function makeListEventBetssUseCase(){
    const eventsRepository = new PrismaEventsRepository()
    const competitorsRepository = new PrismaCompetitorsRepository()
    const listEventbBetsUseCase = new ListEventBetsUseCase(eventsRepository, competitorsRepository)

    return listEventbBetsUseCase
}