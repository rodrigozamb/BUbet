import { Album, UserAlbumCards } from "@prisma/client";

export interface AlbumsRepository{
    getAlbumByEventId(event_id: string, user_id: string): Promise<{ album: Album, cards: UserAlbumCards[] }>
    getAlbumById(album_id: string): Promise<Album|null>
    getAlbumByPackId(pack_id: string): Promise<Album>
}