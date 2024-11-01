import { ListEventResultUseCase } from "../results/list-event-results";
import { PrismaEventsRepository } from "@/repositories/prisma/prisma-events-repository";
import { PrismaEventResultsRepository } from "@/repositories/prisma/prisma-results-repository";


export function makeListEventUseCase(){
    const eventResultsRepository = new PrismaEventResultsRepository()
    const eventsRepository = new PrismaEventsRepository()
    const getUserUseCase = new ListEventResultUseCase(eventResultsRepository,eventsRepository)

    return getUserUseCase
}