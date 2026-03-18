
import { PrismaGuessEventsRepository } from "@/repositories/prisma/prisma-guess-events-repository";
import { ListGuessEventsUseCase } from "../events/list-guess-events-use-case";


export function makeListGuessEventsUseCase(){
    const guessEventsRepository = new PrismaGuessEventsRepository()
    const useCase = new ListGuessEventsUseCase(guessEventsRepository)

    return useCase
}