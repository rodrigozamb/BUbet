import { AlbumCards, UserAlbumCards } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { AlbumCardsRepository } from "../album-cards-repository";

export class PrismaAlbumCardsRepository implements AlbumCardsRepository{
    
    async listAll(): Promise<AlbumCards[]> {
        return await prisma.albumCards.findMany({
            
            include:{
                album:{
                    select:{
                        name:true,
                    }
                }
            }
        })
    }

    async findByAlbumId(album_id: string, user_id: string): Promise<UserAlbumCards[]> {
        return await prisma.userAlbumCards.findMany({
            where:{
                user_id: user_id,
                album_id: album_id
            }
        })
    }
    async openCardPack(pack_id: string): Promise<AlbumCards[]> {

        const card_pack = await prisma.cardPack.findUnique({
            where:{
                id: pack_id
            }
        })
        if(!card_pack){
            throw new Error("Invalid card pack.");
        }

        if(!card_pack.can_open){
            throw new Error("Esse pacote de cartas ainda não pode ser aberto. Fique atento às novidades!");
        }

        const album = await prisma.album.findUnique({
            where:{
                id: card_pack.album_id
            }
        })
        if(!album){
            throw new Error("Invalid album.");
        }

        const albumCards: AlbumCards[] = await prisma.$queryRaw`
            SELECT *
            FROM "album_cards"
            WHERE "albumId" = ${album.id}
            ORDER BY RANDOM()
            LIMIT 5
        `
        return albumCards;
    }

}