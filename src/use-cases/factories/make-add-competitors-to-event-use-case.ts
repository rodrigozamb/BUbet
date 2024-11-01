import { PrismaEventsRepository } from "@/repositories/prisma/prisma-events-repository";import { AddCompetitorToEventUseCase } from "../events/add-competitors-to-event-use-case";
import { PrismaCompetitorsRepository } from "@/repositories/prisma/prisma-competitors-repository";


export function makeAddCompetitorsToEventUseCase(){
    const eventRepository = new PrismaEventsRepository()
    const competitorsRepository = new PrismaCompetitorsRepository()
    
    const addCompetitorToEventUseCase = new AddCompetitorToEventUseCase(eventRepository,competitorsRepository)

    return addCompetitorToEventUseCase
}