import { PrismaBannerTypesRepository } from "@/repositories/prisma/prisma-banner-types-repository";
import { ListAllBannerTypesUseCase } from "../bannerTypes/list-all-banner-types-use-case";

export function makeListAllBannerTypesUseCase(){
    const bannerTypesRepository = new PrismaBannerTypesRepository()
    const listEventGoldenBannersUseCase = new ListAllBannerTypesUseCase(bannerTypesRepository)

    return listEventGoldenBannersUseCase
}