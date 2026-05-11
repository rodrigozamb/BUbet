import { AlbumCards, UserAlbumCards } from "@prisma/client";

export interface AlbumCardsRepository{
    findByAlbumId(album_id: string, user_id: string): Promise<UserAlbumCards[]>
    openCardPack(album_id: string): Promise<AlbumCards[]>  
}