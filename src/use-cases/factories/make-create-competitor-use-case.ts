import { PrismaCompetitorsRepository } from "@/repositories/prisma/prisma-competitors-repository"
import { CreateCompetitorUseCase } from "../competitors/create-competitor-use-case"

export function makeCreateCompetitorUseCase(){
    const competitorsRepository = new PrismaCompetitorsRepository()
    const useCase = new CreateCompetitorUseCase(competitorsRepository)

    return useCase
}