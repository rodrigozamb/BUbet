import { CardPack } from "@prisma/client";

export interface CardPacksRepository{
    listAll(): Promise<CardPack[]>
    findById(card_pack_id: string): Promise<CardPack|null>    
}