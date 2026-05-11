import { UserAlbumPacksRepository } from "@/repositories/user-album-packs-repository"
import { UserAlbumPacks } from "@prisma/client"

interface ListAllUserAlbumPacksUseCaseRequest{
    user_id: string
}

interface ListAllUserAlbumPacksUseCaseResponse{
    packs: UserAlbumPacks[]
}


export class ListAllUserAlbumPacksUseCase {
    
    
    constructor(
        private userAlbumPacksRepository: UserAlbumPacksRepository, 
    ){}
    
    async execute({user_id}: ListAllUserAlbumPacksUseCaseRequest): Promise<ListAllUserAlbumPacksUseCaseResponse> {
        
        const newPacks = await this.userAlbumPacksRepository.listAllByUserId(user_id)
        
        return {
            packs: newPacks
        }
    }

}