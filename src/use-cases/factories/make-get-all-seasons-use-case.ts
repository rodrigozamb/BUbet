import { GetAllSeasonsUseCase } from "../season/getAllSeasons";
import { PrismaSeasonsRepository } from "@/repositories/prisma/prisma-season-repository copy";


export function makeGetAllSeasonsUseCase(){
    const seasonsRepository = new PrismaSeasonsRepository()
    const useCase = new GetAllSeasonsUseCase(seasonsRepository)

    return useCase
}