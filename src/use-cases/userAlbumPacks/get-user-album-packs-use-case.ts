import { UserAlbumPacksRepository } from "@/repositories/user-album-packs-repository"
import { UserAlbumPacks } from "@prisma/client"

interface GetUserAlbumPacksUseCaseRequest{
    pack_id: string,
    user_id: string
}

interface GetUserAlbumPacksUseCaseResponse{
    packs: UserAlbumPacks | null
}


export class GetUserAlbumPacksUseCase {
    
    
    constructor(
        private userAlbumPacksRepository: UserAlbumPacksRepository, 
    ){}
    
    async execute({user_id, pack_id}: GetUserAlbumPacksUseCaseRequest): Promise<GetUserAlbumPacksUseCaseResponse> {
        
        const newPacks = await this.userAlbumPacksRepository.findByAlbumId(pack_id, user_id)
        
        return {
            packs: newPacks
        }
    }

}