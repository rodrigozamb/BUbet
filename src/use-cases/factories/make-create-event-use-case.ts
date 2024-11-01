import { PrismaEventsRepository } from "@/repositories/prisma/prisma-events-repository"
import { CreateEventUseCase } from "../events/create-event-use-case"

export function makeCreateEventUseCase(){
    const eventRepository = new PrismaEventsRepository()
    const useCase = new CreateEventUseCase(eventRepository)

    return useCase
}