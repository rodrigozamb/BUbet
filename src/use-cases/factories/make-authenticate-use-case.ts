import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository"
import { UserAuthenticateUseCase } from "../users/user-authenticate-use-case"

export function makeAuthenticateUseCase(){
    const usersRepository = new PrismaUsersRepository()
    const useCase = new UserAuthenticateUseCase(usersRepository)

    return useCase
}