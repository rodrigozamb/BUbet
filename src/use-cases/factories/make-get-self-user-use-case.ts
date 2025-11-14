import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository";
import { FindSelfUserUseCase } from "../users/find-self-user-use-case";


export function makeGetSelfUserUseCase(){
    const usersRepository = new PrismaUsersRepository()
    const getUserUseCase = new FindSelfUserUseCase(usersRepository)

    return getUserUseCase
}