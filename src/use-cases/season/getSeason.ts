import { Season } from "@prisma/client"
import { SeasonsRepository } from "@/repositories/season-repository"
import { ContentNotFoundError } from "@/use-cases/errors/content_not_found-error"
interface getSeasonUseCaseRequest{
    season_id: string,
}

interface GetSeasonUseCaseResponse{
    result: Season
}

export class GetSeasonUseCase{

    constructor(
        private seasonRepository: SeasonsRepository
    ){}

    async execute({ season_id }:getSeasonUseCaseRequest): Promise<GetSeasonUseCaseResponse>{

        
        const result = await this.seasonRepository.findById(season_id)
        if(!result){
            throw new ContentNotFoundError()
        }
        return {
            result
        }
    }

}