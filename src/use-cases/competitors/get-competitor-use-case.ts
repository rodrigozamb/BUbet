
import { Competitor } from "@prisma/client"
import { ResourceNotFoundError } from "../errors/resource-not-found-error"
import { CompetitorsRepository } from "@/repositories/competitors-repository"

interface FindCompetitorUseCaseRequest{
    competitor_id:string
}

interface FindCompetitorUseCaseResponse{
    competitor: Competitor
}


export class FindCompetitorUseCase {
    
    
    constructor(
        private competitorsRepository: CompetitorsRepository, 
    ){}
    
    async execute({competitor_id}: FindCompetitorUseCaseRequest): Promise<FindCompetitorUseCaseResponse> {
        
        const competitor = await this.competitorsRepository.findById(competitor_id)
        
        if(!competitor){
            throw new ResourceNotFoundError()
        }

        return {
            competitor
        }
    }

}