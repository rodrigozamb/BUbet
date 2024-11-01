import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository"
import { CreateUserUseCase } from "../users/create-user-use-case"

export function makeCreateUserUseCase(){
    const checkInsRepository = new PrismaUsersRepository()
    const useCase = new CreateUserUseCase(checkInsRepository)

    return useCase
}