import { UserAlbumPacks } from "@prisma/client";

export interface UserAlbumPacksRepository{
    findByAlbumId(album_id: string, user_id: string): Promise<UserAlbumPacks|null>
    addPackToUser(user_id: string, pack_id: string, quantity?:number): Promise<number>
    checkUserLastAlbumPack(user_id:string, pack_id:string, days?:number): Promise<boolean>
    checkUserLastAlbumPackReturnTimeLeft(user_id:string, pack_id:string): Promise<string | null>
    listAllByUserId(user_id: string): Promise<UserAlbumPacks[]>
    
    findByPackId(pack_id: string, user_id: string): Promise<UserAlbumPacks|null>
    checkUserHasPack(user_id: string, pack_id: string): Promise<boolean>
    decrementPackQuantity(user_id: string, pack_id: string, quantity?: number): Promise<void>
}