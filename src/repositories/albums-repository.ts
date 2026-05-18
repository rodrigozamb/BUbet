import { Album, UserAlbumCards } from "@prisma/client";

export interface AlbumsRepository{
    getAlbumByEventId(event_id: string, user_id: string): Promise<{ album: Album, cards: UserAlbumCards[] }>
    getAlbumByPackId(pack_id: string): Promise<Album>
}