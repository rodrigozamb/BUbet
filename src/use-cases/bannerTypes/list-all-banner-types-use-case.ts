import { BannerType } from "@prisma/client"
import { BannerTypesRepository } from "@/repositories/banner-types-respository"

interface ListAllBannerTypesUseCaseRequest{
}

interface ListAllBannerTypesUseCaseResponse{
    estandartes: BannerType[]
}


export class ListAllBannerTypesUseCase {
    
    constructor(
        private bannerTypesRepository: BannerTypesRepository 
    ){}
    
    async execute(): Promise<ListAllBannerTypesUseCaseResponse> {
        
        const estandartes = await this.bannerTypesRepository.findAll()

        return {
            estandartes
        }
    }

}