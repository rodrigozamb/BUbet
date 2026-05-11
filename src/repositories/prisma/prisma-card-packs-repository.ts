import { CardPack } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { CardPacksRepository } from "../card-packs-repository";

export class PrismaCardPacksRepository implements CardPacksRepository{
    async listAll(): Promise<CardPack[]> {
        return await prisma.cardPack.findMany({})
    }
    
    async findById(card_pack_id: string): Promise<CardPack | null> {
        return await prisma.cardPack.findUnique({
            where: {
                id: card_pack_id
            }
        })
    }
    

}