import { UsersRepository } from "@/repositories/users-repository"
import { User } from "@prisma/client"
import { ResourceNotFoundError } from "../errors/resource-not-found-error"

interface ListUsersByRankUseCaseRequest{
}

interface ListUsersByRankUseCaseResponse{
    users: {}[]
}


export class ListUsersByRankUseCase {
    
    
    constructor(
        private usersRepository: UsersRepository, 
    ){}
    
    async execute({}: ListUsersByRankUseCaseRequest): Promise<ListUsersByRankUseCaseResponse> {
        
        const users = await this.usersRepository.listUsersByRank()
        
        if(!users){
            throw new ResourceNotFoundError()
        }

        return {
            users
        }
    }

}