import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository";
import { GetBetUseCase } from "../bets/get-bet-use-case";
import { PrismaEventsRepository } from "@/repositories/prisma/prisma-events-repository";
import { PrismaBetsRepository } from "@/repositories/prisma/prisma-bets-repository";


export function makeGetBetUseCase(){
    const betsRepository = new PrismaBetsRepository()
    const usersRepository = new PrismaUsersRepository()
    const eventsRepository = new PrismaEventsRepository()
    const getBetUseCase = new GetBetUseCase(betsRepository, usersRepository, eventsRepository)

    return getBetUseCase
}