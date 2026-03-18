import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository";
import { PrismaGuessBetsRepository } from "@/repositories/prisma/prisma-guess-bets-repository";
import { PrismaGuessEventsRepository } from "@/repositories/prisma/prisma-guess-events-repository";
import { GetGuessBetUseCase } from "../bets/get-guess-bet-use-case";


export function makeGetGuessBetUseCase(){
    const guessBetsRepository = new PrismaGuessBetsRepository()
    const usersRepository = new PrismaUsersRepository()
    const guessEventsRepository = new PrismaGuessEventsRepository()
    const getBetUseCase = new GetGuessBetUseCase(guessBetsRepository, usersRepository, guessEventsRepository)

    return getBetUseCase
}