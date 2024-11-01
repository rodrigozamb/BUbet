import { PrismaCompetitorsRepository } from "@/repositories/prisma/prisma-competitors-repository"
import { FindCompetitorUseCase } from "../competitors/get-competitor-use-case"


export function makeGetCompetitorUseCase(){
    const competitorsRepository = new PrismaCompetitorsRepository()
    const getCompetitorUseCase = new FindCompetitorUseCase(competitorsRepository)

    return getCompetitorUseCase
}