import { PrismaSeasonsRepository } from "@/repositories/prisma/prisma-season-repository copy";
import { CreateSeasonUseCase } from "../season/createSeason";


export function makeCreateSeasonUseCase(){
    const seasonsRepository = new PrismaSeasonsRepository()
    const useCase = new CreateSeasonUseCase(seasonsRepository)

    return useCase
}