
import { PrismaGuessEventsRepository } from "@/repositories/prisma/prisma-guess-events-repository";
import { ListGuessEventBetsUseCase } from "../events/list-guess-event-bets-use-case";

export function makeListGuessEventBetsUseCase(){
    const guessEventsRepository = new PrismaGuessEventsRepository()
    const listGuessEventBetsUseCase = new ListGuessEventBetsUseCase(guessEventsRepository)

    return listGuessEventBetsUseCase
}