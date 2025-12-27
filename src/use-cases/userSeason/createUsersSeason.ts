import { EventNotFoundError } from "../errors/event-not-found-error"
import { UserSeasonsRepository } from "@/repositories/user-season-repository"
import { SeasonsRepository } from "@/repositories/season-repository"

interface CreateUserSeasonUseCaseRequest{
    season_id: string,
    users:{
        id: string,
        place: number,
        score: number
    }[]
}

interface CreateUsersSeasonUseCaseResponse{
    result: number
}

export class CreateUserSeasonsUseCase{

    constructor(
        private userSeasonRepository: UserSeasonsRepository,
        private seasonsRepository: SeasonsRepository,
    ){}
    
    async execute({season_id, users}:CreateUserSeasonUseCaseRequest): Promise<CreateUsersSeasonUseCaseResponse>{

        const seasonExits = await this.seasonsRepository.findById(season_id)
        if(!seasonExits){
            throw new EventNotFoundError()
        }

        const data = users.map((user) => {
            return {
                userId: user.id,
                seasonId: season_id,
                position: user.place,
                points: user.score
            }
        })

        const result = await this.userSeasonRepository.bulkCreate(data)

        return {
            result
        }
    }

}