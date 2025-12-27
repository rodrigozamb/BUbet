import { UserSeason } from "@prisma/client"
import { UserSeasonsRepository } from "@/repositories/user-season-repository"

interface ListUserSeasonsUseCaseRequest{
    season_id: string,
}

interface ListUsersSeasonUseCaseResponse{
    result: UserSeason[]
}

export class FetchSeasonResultsUseCase{

    constructor(
        private userSeasonRepository: UserSeasonsRepository
    ){}
    
    async execute({ season_id }:ListUserSeasonsUseCaseRequest): Promise<ListUsersSeasonUseCaseResponse>{

        
        const result = await this.userSeasonRepository.fetchSeasonResults(season_id)

        return {
            result
        }
    }

}