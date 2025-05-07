import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository"
import { PrismaFeedbacksRepository } from "@/repositories/prisma/prisma-feedbacks-repository"
import { CreateFeedbackUseCase } from "../feedbacks/create-feedback-use-case"

export function makeCreateFeedBackUseCase(){
    const feedbacksRepository = new PrismaFeedbacksRepository()
    const usersRepository = new PrismaUsersRepository()
    const useCase = new CreateFeedbackUseCase(feedbacksRepository, usersRepository)

    return useCase
}