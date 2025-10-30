import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository"
import { ForgotPasswordUseCase } from "../users/forgot-password-use-case"


export function makeForgetPasswordUseCase(){
    const usersRepository = new PrismaUsersRepository()
    const useCase = new ForgotPasswordUseCase(usersRepository)

    return useCase
}