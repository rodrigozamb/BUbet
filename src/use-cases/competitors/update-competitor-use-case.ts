import { Competitor } from "@prisma/client"
import { CompetitorsRepository } from "@/repositories/competitors-repository"
import { CompetitorNotFoundError } from "../errors/competitor-not-found-error"

interface UpdateCompetitorUseCaseRequest{
    competitor_id: string
    name:string | undefined
    description:string | undefined
    profile_url: string | undefined
}

interface UpdateCompetitorUseCaseResponse{
    competitor: Competitor
}

export class UpdateCompetitorUseCase{

    constructor(
        private competitorsRepository: CompetitorsRepository, 
    ){}
    
    async execute({competitor_id,description,name,profile_url}:UpdateCompetitorUseCaseRequest): Promise<UpdateCompetitorUseCaseResponse>{

        const competitorExists = await this.competitorsRepository.findById(competitor_id)
        if(!competitorExists){
            throw new CompetitorNotFoundError()
        }
        
        const competitor = await this.competitorsRepository.update(competitor_id,{name, description, profile_url})

        return {
            competitor
        }
    }

}