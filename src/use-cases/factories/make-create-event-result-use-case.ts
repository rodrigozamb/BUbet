import { PrismaCompetitorsRepository } from "@/repositories/prisma/prisma-competitors-repository"
import { CreateCompetitorUseCase } from "../competitors/create-competitor-use-case"
import { PrismaEventResultsRepository } from "@/repositories/prisma/prisma-results-repository"
import { CreateEventResultUseCase } from "../results/create-event-result-use-case"
import { PrismaEventsRepository } from "@/repositories/prisma/prisma-events-repository"

export function makeCreateEventResultUseCase(){

    const eventResultsRepository = new PrismaEventResultsRepository()
    const eventsRepository = new PrismaEventsRepository()
    const competitorsRepository = new PrismaCompetitorsRepository()
    
    const useCase = new CreateEventResultUseCase(eventResultsRepository, eventsRepository, competitorsRepository)

    return useCase
}