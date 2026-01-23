import { EventsResultsRepository } from "@/repositories/event-results-repository"
import { EventResults } from "@prisma/client"

interface getCompetitorStatisticsUseCaseRequest{
    competitor_id:string
}

interface getCompetitorStatisticsUseCaseResponse{
    first: EventResults[]
    second: EventResults[]
    third: EventResults[]
    others: EventResults[]
    all: string
}


export class GetCompetitorStatisticsUseCase {
    
    
    constructor(
        private eventsResultsRepository: EventsResultsRepository, 
    ){}
    
    async execute({competitor_id}: getCompetitorStatisticsUseCaseRequest): Promise<getCompetitorStatisticsUseCaseResponse> {
        
        const statistics = await this.eventsResultsRepository.getCompetitorStatistics(competitor_id)
        return statistics
    }

}