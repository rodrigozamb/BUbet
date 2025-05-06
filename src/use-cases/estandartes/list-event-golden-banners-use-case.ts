import { GoldenBannersRepository } from "@/repositories/golden-banners-repository"
import { GoldenBanner } from "@prisma/client"

interface ListEventGoldenBannersUseCaseRequest{
    event_id: string
}

interface ListEventGoldenBannersUseCaseResponse{
    estandartes: GoldenBanner[]
}


export class ListEventGoldenBannersUseCase{

    constructor(
        private goldenBannersRepository: GoldenBannersRepository, 
    ){}
        
    async execute({ event_id }: ListEventGoldenBannersUseCaseRequest): Promise<ListEventGoldenBannersUseCaseResponse> {
        
        const estandartes = await this.goldenBannersRepository.findByEvent( event_id )

        return {
            
            estandartes
        }
    }
}