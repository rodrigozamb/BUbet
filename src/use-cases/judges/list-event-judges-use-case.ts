import { JudgesRepository } from "@/repositories/judges-repository";
import { Judge } from "@prisma/client";



interface ListEventJudgesUseCaseRequest{
    event_id: string
}

interface ListEventJudgesUseCaseResponse{
    judges: Judge[]
}


export class ListEventJudgesUseCase{

    constructor(
        private judgesRepository: JudgesRepository, 
    ){}
        
    async execute({ event_id }: ListEventJudgesUseCaseRequest): Promise<ListEventJudgesUseCaseResponse> {
        
        const judges = await this.judgesRepository.listEventJudges( event_id )

        return {
            
            judges
        }
    }
}