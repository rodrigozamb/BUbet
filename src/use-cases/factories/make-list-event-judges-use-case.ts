import { ListEventJudgesUseCase } from "../judges/list-event-judges-use-case";
import { PrismaJudgesRepository } from "@/repositories/prisma/prisma-judges-repository";


export function makeListEventJudgesUseCase(){
    const judgesRepository = new PrismaJudgesRepository()
    const listEventJudgesUseCase = new ListEventJudgesUseCase(judgesRepository)

    return listEventJudgesUseCase
}