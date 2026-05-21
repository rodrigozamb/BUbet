import { AlbumCardsTrades, Prisma } from "@prisma/client";

export interface AlbumCardsTradesRepository{
    createTrade(data: Prisma.AlbumCardsTradesUncheckedCreateInput): Promise<AlbumCardsTrades>
    deleteTrade(trade_id: string): Promise<void>
    getById(trade_id:string): Promise<AlbumCardsTrades | null>
    listCardsTrades(): Promise<AlbumCardsTrades[]>
    acceptTrade(trade_id: string, to_user_id: string): Promise<void>
}