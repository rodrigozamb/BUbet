import { Cupons, Prisma } from "@prisma/client";
import { CuponsRepository } from "../cupons-repository";
import { prisma } from "@/lib/prisma";


export class PrismaCuponsRepository implements CuponsRepository{
    async checkUserLastCupom(competitor_id: string, days: number = 7): Promise<boolean> {
        const cupom = await prisma.cupons.findFirst({
            where:{
                userId: competitor_id,
                created_at:{
                    gte: new Date(Date.now() - days * 24 * 60 * 60 * 1000)
                }
            }
        })
        if(cupom){
            return false
        }else{
            return true
        }

    }

    async addCupomToUser(data: Prisma.CuponsUncheckedCreateInput): Promise<Cupons> {
        return await prisma.cupons.create({data})
    }

    async findById(cupom_id: string): Promise<Cupons|null> {
        return await prisma.cupons.findFirst({where:{id: cupom_id}})
    }

    async assignCupomToBet(cupom_id: string, competitor_id:string, bet_id:string): Promise<Cupons> {
        return await prisma.cupons.update({
            where:{id: cupom_id, userId:competitor_id},
            data:{betId: bet_id}
        })
    }

}