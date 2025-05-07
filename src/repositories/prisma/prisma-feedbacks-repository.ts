import { Feedback, Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { FeedbacksRepository } from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository{
    async listFeedbacks(verified: boolean): Promise<Feedback[]> {
        
        return await prisma.feedback.findMany({
            where:{
                verified
            }
        })
    }

    async create(data: Prisma.FeedbackUncheckedCreateInput): Promise<Feedback> {
        return await prisma.feedback.create({
            data
        })
    }

 

}