
import { PrismaBetsRepository } from "@/repositories/prisma/prisma-bets-repository"
import { CreateBetUseCase } from "../bets/create-bet-use-case"
import { PrismaEventsRepository } from "@/repositories/prisma/prisma-events-repository"
import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository"
import { PrismaCuponsRepository } from "@/repositories/prisma/prisma-cupons-repository"

export function makeCreateBetUseCase(){
    const betsRepository = new PrismaBetsRepository()
    const eventsRepository = new PrismaEventsRepository()
    const usersRepository = new PrismaUsersRepository()
    const cuponsRepository = new PrismaCuponsRepository()

    const useCase = new CreateBetUseCase(betsRepository, eventsRepository, usersRepository, cuponsRepository)

    return useCase
}