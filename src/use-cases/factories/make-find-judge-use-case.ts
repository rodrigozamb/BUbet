import { FindJudgeUseCase } from "../judges/find-judge-use-case";
import { PrismaJudgesRepository } from "@/repositories/prisma/prisma-judges-repository";


export function makeFindJudgeUseCase(){
    const judgesRepository = new PrismaJudgesRepository()
    const listEventJudgesUseCase = new FindJudgeUseCase(judgesRepository)

    return listEventJudgesUseCase
}