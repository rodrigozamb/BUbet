import { GoldenBanner } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { GoldenBannersRepository } from "../golden-banners-repository";

export class PrismaGoldenBannersRepository implements GoldenBannersRepository{
    async findByEvent(event_id: string): Promise<GoldenBanner[]> {
        const res = await prisma.event.findFirst({
            where:{
                id: event_id
            },
            include:{
                estandartes: true
            }
        })

        if(!res){
            return []
        }

        return res.estandartes
    }

    async findByCompetitor(competitor_id: string): Promise<GoldenBanner[]> {
        const res = await prisma.competitor.findFirst({
            where:{
                id: competitor_id
            },
            include:{
                estandartes: true
            }
        })

        if(!res){
            return []
        }

        return res.estandartes
    }

 

}