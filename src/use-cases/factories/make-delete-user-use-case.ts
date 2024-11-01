import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository";
import { DeleteUserUseCase } from "../users/delete-user-use-case";


export function makeDeleteUserUseCase(){
    const usersRepository = new PrismaUsersRepository()
    const getUserUseCase = new DeleteUserUseCase(usersRepository)

    return getUserUseCase
}