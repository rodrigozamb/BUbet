import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository";
import { FindUserUseCase } from "../users/find-user-use-case";


export function makeGetUserUseCase(){
    const usersRepository = new PrismaUsersRepository()
    const getUserUseCase = new FindUserUseCase(usersRepository)

    return getUserUseCase
}