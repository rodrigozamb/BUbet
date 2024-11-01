import { EventsResultsRepository } from "@/repositories/event-results-repository"

interface getCompetitorStatisticsUseCaseRequest{
    competitor_id:string
}

interface getCompetitorStatisticsUseCaseResponse{
    first: string
    second: string
    third: string
    others: string
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