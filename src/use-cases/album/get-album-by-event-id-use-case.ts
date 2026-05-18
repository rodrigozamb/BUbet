import { AlbumsRepository } from "@/repositories/albums-repository"
import { BadgesRepository } from "@/repositories/badges-repository"
import { Album, UserAlbumCards } from "@prisma/client"

interface GetAlbumByEventIdUseCaseRequest{
    event_id: string,
    user_id: string
}

interface GetAlbumByEventIdUseCaseResponse{
    album: Album
}


export class GetAlbumByEventIdUseCase {
    
    constructor(
        private albumRepository: AlbumsRepository
    ){}
    
    async execute( { event_id, user_id }:GetAlbumByEventIdUseCaseRequest ): Promise<GetAlbumByEventIdUseCaseResponse> {

        const res = await this.albumRepository.getAlbumByEventId( event_id, user_id )
        const userCards: Record<string, UserAlbumCards> = {}

        res.cards.forEach(card => {
            userCards[card.album_card_id] = card
        })

        const albumWithUserCards = {
            ...res.album,
            pages: Array.isArray(res.album.pages)
                ? res.album.pages
                    .slice()
                    .sort((a: any, b: any) => (a.index ?? 0) - (b.index ?? 0))
                    .map((page: any) => ({
                        ...page,
                        cards: Array.isArray(page.cards)
                            ? page.cards.map((card: any) => {
                                const userCard = userCards[card.id]
                                return userCard
                                    ? {
                                        name: userCard.album_card.name,
                                        image_url: userCard.album_card.imageUrl,
                                        naipe: userCard.album_card.naipe,
                                        obtained_at: userCard.obtained_at
                                    }
                                    : {
                                        name: "Cartinha Desconhecida",
                                        image_url: "https://bubet-bucket.s3.sa-east-1.amazonaws.com/albuns/24171c2e-0744-4582-8da1-f7d1bb48f114/cards/bg-card-empty.png",
                                        naipe: "Desconhecido",
                                        obtained_at: "Desconhecido",
                                    }
                            })
                            : []
                    }))
                : []
        }

        return {
            album: albumWithUserCards
        }
    }

}