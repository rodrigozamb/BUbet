import { PrismaGuessEventsRepository } from "@/repositories/prisma/prisma-guess-events-repository"
import { FindGuessEventUseCase } from "../events/find-guess-event-use-case"


export function makeGetGuessEventUseCase(){
    const guessEventsRepository = new PrismaGuessEventsRepository()
    const getEventUseCase = new FindGuessEventUseCase(guessEventsRepository)

    return getEventUseCase
}