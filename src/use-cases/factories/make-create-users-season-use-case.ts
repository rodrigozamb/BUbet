import { PrismaUserSeasonsRepository } from "@/repositories/prisma/prisma-user-season-repository";
import { CreateUserSeasonsUseCase } from "../userSeason/createUsersSeason";
import { PrismaSeasonsRepository } from "@/repositories/prisma/prisma-season-repository copy";


export function makeCreateUsersSeasonUseCase(){
    const userSeasonsRepository = new PrismaUserSeasonsRepository()
    const seasonsRepository = new PrismaSeasonsRepository()
    const useCase = new CreateUserSeasonsUseCase(userSeasonsRepository, seasonsRepository)

    return useCase
}