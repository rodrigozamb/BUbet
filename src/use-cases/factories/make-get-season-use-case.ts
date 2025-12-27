import { GetSeasonUseCase } from "../season/getSeason";
import { PrismaSeasonsRepository } from "@/repositories/prisma/prisma-season-repository copy";


export function makeGetSeasonUseCase(){
    const seasonsRepository = new PrismaSeasonsRepository()
    const useCase = new GetSeasonUseCase(seasonsRepository)

    return useCase
}