import { PrismaCompetitorsRepository } from "@/repositories/prisma/prisma-competitors-repository"
import { UpdateCompetitorUseCase } from "../competitors/update-competitor-use-case"


export function makeUpdateCompetitorUseCase(){
    const competitorsRepository = new PrismaCompetitorsRepository()
    const useCase = new UpdateCompetitorUseCase(competitorsRepository)

    return useCase
}