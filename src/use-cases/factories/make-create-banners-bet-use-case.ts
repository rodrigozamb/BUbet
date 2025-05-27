import { CreateGoldenBannersBetUseCase } from "../estandartes/create-golden-banners-bet-use-case"
import { PrismaGoldenBannersRepository } from "@/repositories/prisma/prisma-golden-banners-repository"

export function makeCreateBannersBetUseCase(){
    const goldenBannersRepository = new PrismaGoldenBannersRepository()

    const useCase = new CreateGoldenBannersBetUseCase(goldenBannersRepository)

    return useCase
}
