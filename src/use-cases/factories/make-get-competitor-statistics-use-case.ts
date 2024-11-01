import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository";
import { FindUserUseCase } from "../users/find-user-use-case";
import { PrismaEventResultsRepository } from "@/repositories/prisma/prisma-results-repository";
import { GetCompetitorStatisticsUseCase } from "../competitors/get-statistics-use-case";


export function makeGetCompetitorStatisticsUseCase(){
    const eventResultsRepository = new PrismaEventResultsRepository()
    const getCompetitorStatisticsUseCase = new GetCompetitorStatisticsUseCase(eventResultsRepository)

    return getCompetitorStatisticsUseCase
}
