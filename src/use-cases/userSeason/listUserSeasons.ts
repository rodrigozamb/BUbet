import { UserSeason } from "@prisma/client"
import { UserSeasonsRepository } from "@/repositories/user-season-repository"

interface ListUserSeasonsUseCaseRequest{
    user_id: string,
}

interface ListUsersSeasonUseCaseResponse{
    result: UserSeason[]
}

export class ListUserSeasonsUseCase{

    constructor(
        private userSeasonRepository: UserSeasonsRepository
    ){}
    
    async execute({ user_id }:ListUserSeasonsUseCaseRequest): Promise<ListUsersSeasonUseCaseResponse>{

        
        const result = await this.userSeasonRepository.listUserSeasons(user_id)

        return {
            result
        }
    }

}