import { UserAlbumPacksRepository } from "@/repositories/user-album-packs-repository"

interface AddAlbumPackToUserUseCaseRequest{
    pack_id: string,
    user_id: string,
    quantity:number
}

interface AddAlbumPackToUserUseCaseResponse{
    message: string
}


export class AddAlbumPackToUserUseCase {
    
    
    constructor(
        private userAlbumPacksRepository: UserAlbumPacksRepository, 
    ){}
    
    async execute({quantity, user_id, pack_id}: AddAlbumPackToUserUseCaseRequest): Promise<AddAlbumPackToUserUseCaseResponse> {
        const recentCard = await this.userAlbumPacksRepository.checkUserLastAlbumPackReturnTimeLeft(user_id, pack_id)
        if (recentCard) {
            throw new Error("Você precisa mais "+recentCard+" para comprar mais pacotes deste álbum")
        }
        const newPacks = await this.userAlbumPacksRepository.addPackToUser(user_id, pack_id, quantity)
        
        return {
            message: `${newPacks} Pacote(s) foram comprados com sucesso`
        }
    }

}