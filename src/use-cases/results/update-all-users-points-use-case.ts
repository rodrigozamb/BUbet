import { EventsResultsRepository } from "@/repositories/event-results-repository"

interface UpdateAllUsersPointsUseCaseRequest{
}

interface UpdateAllUsersPointsUseCaseResponse{
}

export class UpdateAllUsersPointsUseCase{

    constructor(
        private resultsRepository: EventsResultsRepository, 
    ){}
    
    async execute({}:UpdateAllUsersPointsUseCaseRequest): Promise<UpdateAllUsersPointsUseCaseResponse>{


        await this.resultsRepository.updateUserPagePoints()
        await this.resultsRepository.updateUsersPositions()
        return { }
    }

}