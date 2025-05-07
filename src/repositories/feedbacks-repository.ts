import { Feedback, Prisma } from "@prisma/client";

export interface FeedbacksRepository{
    listFeedbacks(verified: boolean): Promise<Feedback[]>
    create(data: Prisma.FeedbackUncheckedCreateInput):Promise<Feedback>
}