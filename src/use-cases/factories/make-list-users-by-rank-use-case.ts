import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository"
import { ListUsersByRankUseCase } from "../users/list-users-by-rank-use-case"

export function makelistUsersByRankUseCase(){
    const usersRepository = new PrismaUsersRepository()
    const useCase = new ListUsersByRankUseCase(usersRepository)
    return useCase
}