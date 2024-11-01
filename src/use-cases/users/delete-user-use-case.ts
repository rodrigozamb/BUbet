import { User } from "@prisma/client"
import { UsersRepository } from "@/repositories/users-repository"
import { UserNotFoundError } from "../errors/user-not-found-error"

interface DeleteUserUseCaseRequest{
    user_id: string
}

interface DeleteUserUseCaseResponse{
    user: User
}

export class DeleteUserUseCase{

    constructor(
        private usersRepository: UsersRepository, 
    ){}
    
    async execute({user_id}:DeleteUserUseCaseRequest): Promise<DeleteUserUseCaseResponse>{

        const userExists = await this.usersRepository.findById(user_id)
    
        if(!userExists){
            throw new UserNotFoundError()
        }

        const user = await this.usersRepository.delete(user_id)

        return {
            user
        }
    }

}