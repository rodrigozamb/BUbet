import { Season } from "@prisma/client"
import { SeasonsRepository } from "@/repositories/season-repository"
import { ContentNotFoundError } from "@/use-cases/errors/content_not_found-error"

interface GetSeasonUseCaseResponse{
    seasons: Season[]
}

export class GetAllSeasonsUseCase{

    constructor(
        private seasonRepository: SeasonsRepository
    ){}

    async execute(): Promise<GetSeasonUseCaseResponse>{

        
        const seasons = await this.seasonRepository.listSeasons()
        if(!seasons){
            throw new ContentNotFoundError()
        }
        return {
            seasons
        }
    }

}