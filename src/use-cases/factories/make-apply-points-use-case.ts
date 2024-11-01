import { PrismaEventResultsRepository } from "@/repositories/prisma/prisma-results-repository"
import { PrismaEventsRepository } from "@/repositories/prisma/prisma-events-repository"
import { ApplyPointsUseCase } from "../results/apply-points"

export function makeApplyPointsUseCase(){

    const eventResultsRepository = new PrismaEventResultsRepository()
    const eventsRepository = new PrismaEventsRepository()
    
    const useCase = new ApplyPointsUseCase(eventResultsRepository, eventsRepository)

    return useCase
}