import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository"
import { PrismaGuessBetsRepository } from "@/repositories/prisma/prisma-guess-bets-repository"
import { PrismaGuessEventsRepository } from "@/repositories/prisma/prisma-guess-events-repository"
import { CreateGuessBetUseCase } from "../bets/create-guess-bet-user-case"

export function makeCreateGuessBetUseCase(){
    const guessBetsRepository = new PrismaGuessBetsRepository()
    const guessEventsRepository = new PrismaGuessEventsRepository()
    const usersRepository = new PrismaUsersRepository()
    const useCase = new CreateGuessBetUseCase(guessBetsRepository, guessEventsRepository, usersRepository)

    return useCase
}