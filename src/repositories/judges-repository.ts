import { Judge } from "@prisma/client";

export interface JudgesRepository{
    findById(judge_id: string): Promise<Judge | null >
    listEventJudges(event_id: string): any
}