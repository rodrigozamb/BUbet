import { AlbumsRepository } from "@/repositories/albums-repository"
import { BadgesRepository } from "@/repositories/badges-repository"
import { Album, UserAlbumCards } from "@prisma/client"

interface GetAlbumByEventIdUseCaseRequest{
    event_id: string,
    user_id: string
}

interface GetAlbumByEventIdUseCaseResponse{
    album: any,
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

        const totalCardsInAlbum = Array.isArray(res.album.pages)
            ? res.album.pages.flatMap((page: any) => Array.isArray(page.cards) ? page.cards : []).length
            : 0

        const userCardsCount = res.cards.length

        const albumWithUserCards = {
            ...res.album,
            pages: Array.isArray(res.album.pages)
                ? res.album.pages
                    .slice()
                    .sort((a: any, b: any) => (a.index ?? 0) - (b.index ?? 0))
                    .map((page: any) => {
                        const allCards = Array.isArray(page.cards) ? page.cards : []

                        const mapCard = (card: any) => {
                            const userCard = userCards[card.id]
                            return userCard
                                ? {
                                    name: userCard.album_card.name,
                                    image_url: userCard.album_card.imageUrl,
                                    naipe: userCard.album_card.naipe,
                                    type: userCard.album_card.type,
                                    obtained_at: userCard.obtained_at
                                }
                                : {
                                    name: "Cartinha Desconhecida",
                                    image_url:card.type==="HORIZONTAL" ?  `https://bubet-bucket.s3.sa-east-1.amazonaws.com/albuns/${res.album.id}/cards/group-default.png` : `https://bubet-bucket.s3.sa-east-1.amazonaws.com/albuns/${res.album.id}/cards/bg-card-empty.png`,
                                    naipe: "Desconhecido",
                                    type: card.type,
                                    obtained_at: "Desconhecido",
                                }
                        }

                        const horizontal_cards = allCards
                            .filter((c: any) => (c.type ?? '') === 'HORIZONTAL')
                            .map(mapCard)

                        const cards = allCards
                            .filter((c: any) => (c.type ?? '') !== 'HORIZONTAL')
                            .map(mapCard)

                        return {
                            ...page,
                            cards,
                            horizontal_cards
                        }
                    })
                : []
        }

        return {
            album: albumWithUserCards
        }
    }

}