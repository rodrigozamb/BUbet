import { FeedbacksRepository } from "@/repositories/feedbacks-repository";
import { Feedback } from "@prisma/client";
import { ResourceNotFoundError } from "../errors/resource-not-found-error";

interface ListFeedbacksUseCaseRequest{
    verified: boolean
}

interface ListFeedbacksUseCaseResponse{
    feedbacks: Feedback[]
}

export class ListFeedbacksUseCase{

    constructor(
        private feedbacksRepository: FeedbacksRepository
    ){}

    async execute({verified}:ListFeedbacksUseCaseRequest){

        const feedbacks = await this.feedbacksRepository.listFeedbacks(verified)

        if(!feedbacks){
            throw new ResourceNotFoundError()
        }

        return{
            feedbacks
        }
    }
}