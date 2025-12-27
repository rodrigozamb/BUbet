import { PrismaUserSeasonsRepository } from "@/repositories/prisma/prisma-user-season-repository";
import { FetchSeasonResultsUseCase } from "../userSeason/fetchSeasonResults";


export function makeFetchSeasonResultsUseCase(){
    const userSeasonsRepository = new PrismaUserSeasonsRepository()
    const useCase = new FetchSeasonResultsUseCase(userSeasonsRepository)

    return useCase
}