import { PrismaJudgesRepository } from "@/repositories/prisma/prisma-judges-repository";
import { ListAllJudgesUseCase } from "../judges/list-all-judges-use-case";

export function makeListAllJudgesUseCase(){
    const judgesRepository = new PrismaJudgesRepository()
    const listEventGoldenBannersUseCase = new ListAllJudgesUseCase(judgesRepository)

    return listEventGoldenBannersUseCase
}