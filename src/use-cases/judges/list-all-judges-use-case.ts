import { JudgesRepository } from "@/repositories/judges-repository";
import { Judge } from "@prisma/client";
import { ResourceNotFoundError } from "../errors/resource-not-found-error";



interface FindJudgeUseCaseRequest{
}

interface FindJudgeUseCaseResponse{
    judges: Judge[]
}


export class ListAllJudgesUseCase{

    constructor(
        private judgesRepository: JudgesRepository, 
    ){}
        
    async execute(): Promise<FindJudgeUseCaseResponse> {
        
        const judges = await this.judgesRepository.findAll( )
        if(!judges){
            throw new ResourceNotFoundError()
        }
        
        return {
            judges
        }
    }
}