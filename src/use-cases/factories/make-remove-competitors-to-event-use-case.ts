import { PrismaEventsRepository } from "@/repositories/prisma/prisma-events-repository";import { AddCompetitorToEventUseCase } from "../events/add-competitors-to-event-use-case";
import { PrismaCompetitorsRepository } from "@/repositories/prisma/prisma-competitors-repository";
import { RemoveCompetitorToEventUseCase } from "../events/remove-competitors-to-event-use-case";


export function makeRemoveCompetitorsToEventUseCase(){
    const eventRepository = new PrismaEventsRepository()
    const competitorsRepository = new PrismaCompetitorsRepository()
    
    const removeCompetitorToEventUseCase = new RemoveCompetitorToEventUseCase(eventRepository,competitorsRepository)

    return removeCompetitorToEventUseCase
}