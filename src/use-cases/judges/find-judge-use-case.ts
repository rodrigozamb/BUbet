import { JudgesRepository } from "@/repositories/judges-repository";
import { Judge } from "@prisma/client";
import { ResourceNotFoundError } from "../errors/resource-not-found-error";



interface FindJudgeUseCaseRequest{
    judge_id: string
}

interface FindJudgeUseCaseResponse{
    judge: Judge
}


export class FindJudgeUseCase{

    constructor(
        private judgesRepository: JudgesRepository, 
    ){}
        
    async execute({ judge_id }: FindJudgeUseCaseRequest): Promise<FindJudgeUseCaseResponse> {
        
        const judge = await this.judgesRepository.findById( judge_id )


         if(!judge){
            throw new ResourceNotFoundError()
        }
        
        return {
            judge
        }
    }
}