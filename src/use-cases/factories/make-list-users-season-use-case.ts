import { PrismaUserSeasonsRepository } from "@/repositories/prisma/prisma-user-season-repository";
import { ListUserSeasonsUseCase } from "../userSeason/listUserSeasons";


export function makeListUsersSeasonUseCase(){
    const userSeasonsRepository = new PrismaUserSeasonsRepository()
    const useCase = new ListUserSeasonsUseCase(userSeasonsRepository)

    return useCase
}