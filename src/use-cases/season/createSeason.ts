import { SeasonsRepository } from "@/repositories/season-repository"
import { Season } from "@prisma/client"

interface CreateSeasonUseCaseRequest{
    name: string
}

interface CreateSeasonUseCaseResponse{
    result: Season
}

export class CreateSeasonUseCase{

    constructor(
        private seasonsRepository: SeasonsRepository,
    ){}
    
    async execute({name}:CreateSeasonUseCaseRequest): Promise<CreateSeasonUseCaseResponse>{

        const result = await this.seasonsRepository.create({name})

        return {
            result
        }
    }

}