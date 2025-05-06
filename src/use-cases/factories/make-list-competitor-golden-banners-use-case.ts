import { PrismaGoldenBannersRepository } from "@/repositories/prisma/prisma-golden-banners-repository";
import { ListEventGoldenBannersUseCase } from "../estandartes/list-event-golden-banners-use-case";

export function makeListEventGoldenBannersUseCase(){
    const goldenBannersRepository = new PrismaGoldenBannersRepository()
    const listEventGoldenBannersUseCase = new ListEventGoldenBannersUseCase(goldenBannersRepository)

    return listEventGoldenBannersUseCase
}