import { UserAlbumCards } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { UserAlbumCardsRepository } from "../user-album-cards-repository";

export class PrismaUserAlbumCardsRepository implements UserAlbumCardsRepository{

    async findById(user_id: string, card_id: string): Promise<UserAlbumCards | null> {
        return await prisma.userAlbumCards.findFirst({
            where:{
                user_id: user_id,
                album_card_id: card_id,
            }
        })
    }

    async checkUserLastAlbumCard(user_id: string, album_id: string, days: number = 1): Promise<boolean> {
        const albumCard = await prisma.userAlbumCards.findFirst({
            where:{
                user_id: user_id,
                album_card:{
                    albumId: album_id,
                },
                last_obtained_at:{
                    gte: new Date(Date.now() - days * 24 * 60 * 60 * 1000)
                }
            }
        })
        if(albumCard){
            return true
        }else{
            return false
        }

    }
    
    async assignCardsToUser(user_id: string, card_ids: string[]): Promise<void> {
        if (card_ids.length === 0) {
            return;
        }

        await prisma.$transaction(async (tx) => {
            for (const album_card_id of card_ids) {
                const existingCard = await tx.userAlbumCards.findFirst({
                    where: {
                        user_id,
                        album_card_id,
                    },
                });

                if (existingCard) {
                    await tx.userAlbumCards.update({
                        where: {
                            id: existingCard.id,
                        },
                        data: {
                            quantity: existingCard.quantity + 1,
                            last_obtained_at: new Date(),
                        },
                    });
                } else {
                    await tx.userAlbumCards.create({
                        data: {
                            user_id,
                            album_card_id,
                        },
                    });
                }
            }
        });
    }

    async listAllByUserId(user_id: string): Promise<UserAlbumCards[]> {
        return await prisma.userAlbumCards.findMany({
            where:{
                user_id: user_id
            },
            include:{
                album_card: {
                    select:{
                        id: true,
                        imageUrl: true,
                        naipe: true,
                        team: true,
                        name: true,
                        album:{
                            select:{
                                name: true,
                            }
                        }
                    }
                },
                
            }
        })
    }
    async findByAlbumId(album_id: string, user_id: string): Promise<UserAlbumCards[]> {
        return await prisma.userAlbumCards.findMany({
            where:{
                user_id: user_id,
                album_card: {
                    albumId: album_id,
                },
            }
        })
    }

}