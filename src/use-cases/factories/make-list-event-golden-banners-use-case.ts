import { PrismaGoldenBannersRepository } from "@/repositories/prisma/prisma-golden-banners-repository";
import { ListCompetitorGoldenBannersUseCase } from "../estandartes/list-competitor-golden-banners-use-case";

export function makeListCompetitorGoldenBannersUseCase(){
    const goldenBannersRepository = new PrismaGoldenBannersRepository()
    const listCompetitorGoldenBannersUseCase = new ListCompetitorGoldenBannersUseCase(goldenBannersRepository)

    return listCompetitorGoldenBannersUseCase
}