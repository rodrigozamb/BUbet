import { PrismaEventsRepository } from "@/repositories/prisma/prisma-events-repository";
import { AddJudgeToEventUseCase } from "../events/add-judges-to-event-use-case";
import { PrismaJudgesRepository } from "@/repositories/prisma/prisma-judges-repository";


export function makeAddJudgesToEventUseCase(){
    const eventRepository = new PrismaEventsRepository()
    const judgesRepository = new PrismaJudgesRepository()
    
    const addJudgeToEventUseCase = new AddJudgeToEventUseCase(eventRepository,judgesRepository)

    return addJudgeToEventUseCase
}