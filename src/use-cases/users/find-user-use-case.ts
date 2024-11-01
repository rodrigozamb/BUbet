import { UsersRepository } from "@/repositories/users-repository"
import { User } from "@prisma/client"
import { ResourceNotFoundError } from "../errors/resource-not-found-error"

interface FindUserUseCaseRequest{
    user_id:string
}

interface FindUserUseCaseResponse{
    user: User
}


export class FindUserUseCase {
    
    
    constructor(
        private usersRepository: UsersRepository, 
    ){}
    
    async execute({user_id}: FindUserUseCaseRequest): Promise<FindUserUseCaseResponse> {
        
        const user = await this.usersRepository.findById(user_id)
        
        if(!user){
            throw new ResourceNotFoundError()
        }

        return {
            user
        }
    }

}