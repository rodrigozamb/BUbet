import { PrismaCompetitorsRepository } from "@/repositories/prisma/prisma-competitors-repository"
import { ListCompetitorsUseCase } from "../competitors/list-competitors-use-case"

export function makeListCompetitorUseCase(){
    const competitorsRepository = new PrismaCompetitorsRepository()
    const getCompetitorUseCase = new ListCompetitorsUseCase(competitorsRepository)

    return getCompetitorUseCase
}