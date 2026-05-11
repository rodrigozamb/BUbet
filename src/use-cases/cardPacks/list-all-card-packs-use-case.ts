
import { CardPack } from "@prisma/client"
import { CardPacksRepository } from "@/repositories/card-packs-repository"


interface ListCardPacksUseCaseResponse{
    packs: CardPack[]
}


export class ListAllCardPacksUseCase {
    
    constructor(
        private cardPacksRepository: CardPacksRepository, 
    ){}
    
    async execute(): Promise<ListCardPacksUseCaseResponse> {
        
        const cardPacks = await this.cardPacksRepository.listAll()
        return {
            packs: cardPacks
        }
    }

}