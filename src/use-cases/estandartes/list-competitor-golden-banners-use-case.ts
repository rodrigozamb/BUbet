import { GoldenBannersRepository } from "@/repositories/golden-banners-repository"
import { GoldenBanner } from "@prisma/client"

interface ListCompetitorGoldenBannersUseCaseRequest{
    competitor_id: string
}

interface ListCompetitorGoldenBannersUseCaseResponse{
    estandartes: GoldenBanner[]
}


export class ListCompetitorGoldenBannersUseCase{

    constructor(
        private goldenBannersRepository: GoldenBannersRepository, 
    ){}
        
    async execute({ competitor_id }: ListCompetitorGoldenBannersUseCaseRequest): Promise<ListCompetitorGoldenBannersUseCaseResponse> {
        
        const estandartes = await this.goldenBannersRepository.findByCompetitor( competitor_id )

        return {
            
            estandartes
        }
    }
}