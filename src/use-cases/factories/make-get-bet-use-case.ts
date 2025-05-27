import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository";
import { GetBetUseCase } from "../bets/get-bet-use-case";
import { PrismaEventsRepository } from "@/repositories/prisma/prisma-events-repository";
import { PrismaBetsRepository } from "@/repositories/prisma/prisma-bets-repository";
import { PrismaCompetitorsRepository } from "@/repositories/prisma/prisma-competitors-repository";


export function makeGetBetUseCase(){
    const betsRepository = new PrismaBetsRepository()
    const usersRepository = new PrismaUsersRepository()
    const eventsRepository = new PrismaEventsRepository()
    const competitorsRepository = new PrismaCompetitorsRepository()
    const getBetUseCase = new GetBetUseCase(betsRepository, usersRepository, eventsRepository, competitorsRepository)

    return getBetUseCase
}