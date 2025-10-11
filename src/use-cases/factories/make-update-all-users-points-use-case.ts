import { UpdateAllUsersPointsUseCase } from "../results/update-all-users-points-use-case"
import { PrismaEventResultsRepository } from "@/repositories/prisma/prisma-results-repository"


export function makeUpdateAllUsersPointsUseCase(){
    const resultsRepository = new PrismaEventResultsRepository()
    const useCase = new UpdateAllUsersPointsUseCase(resultsRepository)

    return useCase
}