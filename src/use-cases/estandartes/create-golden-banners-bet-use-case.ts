import { GoldenBannersRepository } from "@/repositories/golden-banners-repository"


interface CreateGoldenBannersBetUseCaseRequest{
    data: {
        competitorId: string
        eventId: string
        bannerTypeId: string
    }[]
}

interface CreateGoldenBannersBetUseCaseResponse{
    
}


export class CreateGoldenBannersBetUseCase{

    constructor(
        private goldenBannersRepository: GoldenBannersRepository, 
    ){}
            
    async execute({ data }: CreateGoldenBannersBetUseCaseRequest): Promise<CreateGoldenBannersBetUseCaseResponse> {
        
        const estandartes = await this.goldenBannersRepository.createGoldenBannersBet( data )

        return {
            
            
        }
    }
}