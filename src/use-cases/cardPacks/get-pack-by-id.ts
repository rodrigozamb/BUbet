
import { CardPack } from "@prisma/client"
import { CardPacksRepository } from "@/repositories/card-packs-repository"

interface GetPackByIdUseCaseRequest{
    pack_id: string
}

interface GetPackByIdUseCaseResponse{
    pack: CardPack
}


export class GetPackByIdUseCase {
    
    constructor(
        private cardPacksRepository: CardPacksRepository, 
    ){}
    
    async execute({ pack_id }: GetPackByIdUseCaseRequest): Promise<GetPackByIdUseCaseResponse> {
        
        const cardPack = await this.cardPacksRepository.findById(pack_id)
        if (!cardPack) {
            throw new Error("Pacote de cartas não encontrado.");
        }
        return {
            pack: cardPack
        }
    }

}