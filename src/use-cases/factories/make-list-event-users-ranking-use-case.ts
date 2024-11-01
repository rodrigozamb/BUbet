import { PrismaEventsRepository } from "@/repositories/prisma/prisma-events-repository";
import { ListEventUsersRankingUseCase } from "../events/list-event-users-ranking-use-case";


export function makeListEventUsersRankingUseCase(){
    const eventsRepository = new PrismaEventsRepository()
    const getUserUseCase = new ListEventUsersRankingUseCase(eventsRepository)

    return getUserUseCase
}