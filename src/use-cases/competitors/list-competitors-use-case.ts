
import { Competitor } from "@prisma/client"
import { CompetitorsRepository } from "@/repositories/competitors-repository"


interface ListCompetitorsUseCaseResponse{
    competitors: Competitor[]
}


export class ListCompetitorsUseCase {
    
    constructor(
        private competitorsRepository: CompetitorsRepository, 
    ){}
    
    async execute(): Promise<ListCompetitorsUseCaseResponse> {
        
        const competitors = await this.competitorsRepository.findAll()
        return {
            competitors
        }
    }

}