import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository"
import { confirmEmailUseCase } from "../users/confirm-email-use-case"

export function makeConfirmEmailUseCase(){
    const usersRepository = new PrismaUsersRepository()
    const useCase = new confirmEmailUseCase(usersRepository)

    return useCase
}