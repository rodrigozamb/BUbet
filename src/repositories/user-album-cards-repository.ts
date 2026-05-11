import { UserAlbumCards } from "@prisma/client";

export interface UserAlbumCardsRepository{
    findByAlbumId(album_id: string, user_id: string): Promise<UserAlbumCards[]>
    assignCardsToUser(user_id: string, card_ids: string[]): Promise<void>
    checkUserLastAlbumCard( user_id:string, album_id:string, days?: number ): Promise<boolean>
    listAllByUserId(user_id: string): Promise<UserAlbumCards[]>
}