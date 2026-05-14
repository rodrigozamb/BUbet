import { UserAlbumPacks } from "@prisma/client";
import { UserAlbumPacksRepository } from "../user-album-packs-repository";
import { prisma } from "@/lib/prisma";

export class PrismaUserAlbumPacksRepository implements UserAlbumPacksRepository{

    async checkUserHasPack(user_id: string, pack_id: string): Promise<boolean> {
        console.log('PACK ID - ', pack_id)
        const pack = await prisma.userAlbumPacks.findFirst({
            where:{
                user_id,
                card_pack_id: pack_id,
                quantity: {
                    gt: 0
                }
            }
        })
        if(pack){
            return true
        }
        return false
    }
    
    async decrementPackQuantity(user_id: string, pack_id: string, quantity?: number): Promise<void> {

        await prisma.userAlbumPacks.update({
            where: {
                user_id_card_pack_id: {
                    user_id,
                    card_pack_id: pack_id
                }
            },
            data: {
                quantity: {
                    decrement: quantity || 1
                }
            }
        })
    }

    async checkUserLastAlbumPack(user_id: string, pack_id: string, days: number = 1 ): Promise<boolean> {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        days = 0
        const albumPack = await prisma.userAlbumPacks.findFirst({
            where:{
                user_id: user_id,
                card_pack_id:pack_id,
                last_obtained_at:{
                    gte: today
                }
            }
        })
        if(albumPack){
            return true
        }else{
            return false
        }
    }

    async findByAlbumId(album_id: string, user_id: string): Promise<UserAlbumPacks | null > {
        return await prisma.userAlbumPacks.findFirst({
            where:{
                user_id,
                card_pack:{
                    album_id:album_id
                }
            }
        })
    }

    async findByPackId(pack_id: string, user_id: string): Promise<UserAlbumPacks | null > {
        return await prisma.userAlbumPacks.findFirst({
            where:{
                user_id,
                card_pack_id:pack_id
            }
        })
    }
    async addPackToUser(user_id: string, pack_id: string, quantity: number=1): Promise<number> {
        const brasiliaDate = new Date(Date.now() - 3 * 60 * 60 * 1000)

        const res = await prisma.userAlbumPacks.upsert({
            where: {
                user_id_card_pack_id: {
                    user_id,
                    card_pack_id: pack_id
                }
            },
            update: {
                quantity: {
                    increment: quantity
                },
                last_obtained_at: brasiliaDate
            },
            create: {
                user_id,
                card_pack_id: pack_id,
                quantity,
                obtained_at: brasiliaDate,
                last_obtained_at: brasiliaDate
            }
        })
        console.log(res)
        return quantity
    }
    async listAllByUserId(user_id: string): Promise<UserAlbumPacks[]> {
        return await prisma.userAlbumPacks.findMany({
            where:{
                user_id
            },
            include:{
                card_pack:true
            }
        })
    }



}