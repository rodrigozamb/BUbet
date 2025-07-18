import { Judge } from "@prisma/client";

export interface JudgesRepository{
    findAll(): Promise<Judge[]>
    findById(judge_id: string): Promise<Judge | null >
    listEventJudges(event_id: string): any
}