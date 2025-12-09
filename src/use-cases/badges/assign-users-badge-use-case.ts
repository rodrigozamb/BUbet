import { BadgesRepository } from "@/repositories/badges-repository"

interface AssignUsersBadgeUseCaseRequest{
    badge_id: string
    users: string[]
}

interface AssignUsersBadgeUseCaseResponse{
    
}


export class AssignUsersBadgeUseCase {
    
    constructor(
        private badgesRepository: BadgesRepository
    ){}
    
    async execute( { badge_id, users }:AssignUsersBadgeUseCaseRequest ): Promise<AssignUsersBadgeUseCaseResponse> {
        
        const res = await this.badgesRepository.assign( badge_id, users )
        console.log(res)
        return {
            
        }
    }

}