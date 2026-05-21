import { AlbumCardsTrades, Prisma } from "@prisma/client";
import { AlbumCardsTradesRepository } from "../album-cards-trades-repository";
import { prisma } from "@/lib/prisma";

export class PrismaAlbumCardsTradesRepository implements AlbumCardsTradesRepository{
    async listUserCardsTrades(user_id: string): Promise<AlbumCardsTrades[]> {
        return await prisma.albumCardsTrades.findMany({
            where:{ 
                from_user_id: user_id,
                traded_at: null
            }
        })
    }
    
    async deleteTrade(trade_id: string): Promise<void> {
        await prisma.albumCardsTrades.delete({
            where: {
                id: trade_id
            }
        })
    }
    
    async getById(trade_id: string): Promise<AlbumCardsTrades | null> {
        return await prisma.albumCardsTrades.findUnique({
            where:{
                id: trade_id
            },
        })
    }


    async createTrade(data: Prisma.AlbumCardsTradesUncheckedCreateInput): Promise<AlbumCardsTrades> {
        return await prisma.albumCardsTrades.create({
            data
        })
    }

    
    async listCardsTrades(): Promise<AlbumCardsTrades[]> {
        return await prisma.albumCardsTrades.findMany({
            where:{
                traded_at: null
            },
            include:{
                from_user:{
                    select:{
                        name:true,
                        id:true,
                        profile_url:true
                    }
                },
                offered_card:{
                    select:{
                        id:true,
                        name:true,
                        imageUrl:true
                    }
                },
                trade_card:{
                    select:{
                        id:true,
                        name:true,
                        imageUrl:true
                    }
                }
            }
        })
    }


    async acceptTrade(trade_id: string, to_user_id: string): Promise<void> {
        await prisma.$transaction(async (prisma) => {
            const trade = await prisma.albumCardsTrades.findUnique({
                where: {
                    id: trade_id
                }
            })

            if(!trade){
                throw new Error("Trade not found")
            }

            if(trade.traded_at){
                throw new Error("Trade already accepted")
            }

            // Pré-checagens: garantir que o usuário que oferece possui as cartas necessárias
            const fromOfferedRecord = await prisma.userAlbumCards.findFirst({
                where: {
                    user_id: trade.from_user_id,
                    album_card_id: trade.offered_card_id
                }
            })

            if (!fromOfferedRecord || fromOfferedRecord.quantity < trade.offered_quantity) {
                throw new Error("Insufficient offered card quantity")
            }

            // Pré-checagem: garantir que o usuário que aceitar a troca possui as cartas que serão entregues
            const toTradedRecord = await prisma.userAlbumCards.findFirst({
                where: {
                    user_id: to_user_id,
                    album_card_id: trade.trade_card_id
                }
            })

            if (!toTradedRecord || toTradedRecord.quantity < trade.trade_quantity) {
                throw new Error("Recipient does not have enough cards to trade")
            }

            try {
                await prisma.albumCardsTrades.update({
                    where: {
                        id: trade_id
                    },
                    data: {
                        traded_at: new Date(),
                        to_user_id
                    }
                })

                await prisma.userAlbumCards.updateMany({
                    where: {
                        user_id: trade.from_user_id,
                        album_card_id: trade.offered_card_id
                    },
                    data: {
                        quantity: {
                            decrement: trade.offered_quantity
                        }
                    }
                 })

                const updatedOffered = await prisma.userAlbumCards.updateMany({
                    where: {
                        user_id: to_user_id,
                        album_card_id: trade.offered_card_id
                    },
                    data: {
                        quantity: {
                            increment: trade.offered_quantity
                        }
                    }
                })
                if (updatedOffered.count === 0) {
                    await prisma.userAlbumCards.create({
                        data: {
                            user_id: to_user_id,
                            album_card_id: trade.offered_card_id,
                            quantity: trade.offered_quantity
                        }
                    })
                }


                await prisma.userAlbumCards.updateMany({
                    where: {
                        user_id: to_user_id,
                        album_card_id: trade.trade_card_id
                    },
                    data: {
                        quantity: {
                            decrement: trade.trade_quantity
                        }
                    }
                })
                const updatedTraded = await prisma.userAlbumCards.updateMany({
                    where: {
                        user_id: trade.from_user_id,
                        album_card_id: trade.trade_card_id
                    },
                    data: {
                        quantity: {
                            increment: trade.trade_quantity
                        }
                    }
                })
                if (updatedTraded.count === 0) {
                    await prisma.userAlbumCards.create({
                        data: {
                            user_id: trade.from_user_id,
                            album_card_id: trade.trade_card_id,
                            quantity: trade.trade_quantity
                        }
                    })
                }
            } catch (err) {
                // Lança o erro para que o prisma.$transaction desfaça todas as operações
                throw new Error(`Failed to accept trade: ${err instanceof Error ? err.message : String(err)}`)
            }
        })
    }

}