import { UsersRepository } from "@/repositories/users-repository";
import { compare } from "bcryptjs";
import { User } from "@prisma/client";
import { InvalidCredentialsError } from "../errors/invalid-credentials-error";
import { UserNotFoundError } from "../errors/user-not-found-error";

interface confirmEmailUseCaseRequest{
    user_id:string
}

interface  confirmEmailUseCaseResponse{
    user: User
}


export class confirmEmailUseCase{

    constructor(
        private usersRepository: UsersRepository
    ){}

    async execute({user_id}:confirmEmailUseCaseRequest): Promise<confirmEmailUseCaseResponse>{
        
        const user = await this.usersRepository.findById(user_id)
        if(!user){
            throw new UserNotFoundError()
        }
        if(!user.is_confirmed){
            await this.usersRepository.confirmEmail(user_id)
        }
        return {
            user
        }
    }
}