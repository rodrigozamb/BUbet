
import { PrismaBetsRepository } from "@/repositories/prisma/prisma-bets-repository"
import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository"
import { ListUserBetsCase } from "../bets/list-user-bets-use-case"
import { PrismaCompetitorsRepository } from "@/repositories/prisma/prisma-competitors-repository"

export function makelistUserBetsUseCase(){
    const betsRepository = new PrismaBetsRepository()
    const usersRepository = new PrismaUsersRepository()
    const competitorsRepository = new PrismaCompetitorsRepository()
    const useCase = new ListUserBetsCase(betsRepository, usersRepository, competitorsRepository)

    return useCase
}