import { PrismaFeedbacksRepository } from "@/repositories/prisma/prisma-feedbacks-repository";
import { ListFeedbacksUseCase } from "../feedbacks/list-feedbacks-use-case";


export function makeListFeedbacksUseCase(){
    const feedbacksRepository = new PrismaFeedbacksRepository()
    const useCase = new ListFeedbacksUseCase(feedbacksRepository)

    return useCase
}