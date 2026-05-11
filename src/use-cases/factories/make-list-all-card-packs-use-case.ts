import { PrismaCardPacksRepository } from "@/repositories/prisma/prisma-card-packs-repository";
import { ListAllCardPacksUseCase } from "../cardPacks/list-all-card-packs-use-case";

export function makeListAllCardPacksUseCase(){
    const cardPacksRepository = new PrismaCardPacksRepository()
    const listAllCardPacksUseCase = new ListAllCardPacksUseCase(cardPacksRepository)

    return listAllCardPacksUseCase
}   