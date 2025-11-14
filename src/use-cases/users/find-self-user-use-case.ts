import { UsersRepository } from "@/repositories/users-repository"
import { User } from "@prisma/client"
import { ResourceNotFoundError } from "../errors/resource-not-found-error"

interface FindSelfUserUseCaseRequest{
    user_id:string
}

interface FindSelfUserUseCaseResponse{
    user: User
}


export class FindSelfUserUseCase {
    
    
    constructor(
        private usersRepository: UsersRepository, 
    ){}
    
    async execute({user_id}: FindSelfUserUseCaseRequest): Promise<FindSelfUserUseCaseResponse> {
        
        let user = await this.usersRepository.findSelfById(user_id)
        
        if(!user){
            throw new ResourceNotFoundError()
        }
        
        return {
            user
        }
    }

}