import { PrismaCardPacksRepository } from "@/repositories/prisma/prisma-card-packs-repository"
import { GetPackByIdUseCase } from "../cardPacks/get-pack-by-id"


export function makeGetPackByIdUseCase(){
    const cardPacksRepository = new PrismaCardPacksRepository()
    const getPackByIdUseCase = new GetPackByIdUseCase(cardPacksRepository)

    return getPackByIdUseCase
}