import { Feedback, Prisma } from "@prisma/client";

export interface FeedbacksRepository{
    listFeedbacks(user_id: string): Promise<Feedback[]>
    create(data: Prisma.FeedbackUncheckedCreateInput):Promise<Feedback>
}