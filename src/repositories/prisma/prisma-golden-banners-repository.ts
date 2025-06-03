import { GoldenBanner, Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { Estandarte, GoldenBannersRepository } from "../golden-banners-repository";

export class PrismaGoldenBannersRepository implements GoldenBannersRepository{


    async createGoldenBannersBet(data: Prisma.GoldenBannerCreateManyInput[]): Promise<boolean> {
        console.log(data)
        const res =  await prisma.goldenBanner.createMany({data})
        console.log(res)
        return true
    }

    async findByEvent(event_id: string): Promise<Estandarte[]> {
        const res = await prisma.event.findFirst({
            where:{
                id: event_id
            },
            include:{
                estandartes: {
                    include:{
                        bannerType:{
                            select:{
                                name:true,
                                id:true,
                                description: true
                            }
                        },
                        event: {
                            select:{
                                name: true,
                                id:true,
                                banner:true
                            }
                        }
                    }
                },
            },

        })

        if(!res){
            return []
        }
        
        const estandartes = res.estandartes.map((est) => {
            return {
                event:{
                    id: est.eventId,
                    name: est.event.name,
                    banner: est.event.banner
                },
                banner:{
                    id: est.bannerTypeId,
                    name: est.bannerType.name,
                    description: est.bannerType.description
                }
            }
        })

        return estandartes
    }

    async findByCompetitor(competitor_id: string): Promise<Estandarte[]> {
        const res = await prisma.competitor.findFirst({
            where:{
                id: competitor_id
            },
            include:{
                estandartes: {
                    include:{
                        bannerType:{
                            select:{
                                name:true,
                                id:true,
                                description: true
                            }
                        },
                        event: {
                            select:{
                                name: true,
                                id:true,
                                banner:true
                            }
                        }
                    }
                },
            }
        })

        if(!res){
            return []
        }

        const estandartes = res.estandartes.map((est) => {
            return {
                event:{
                    id: est.eventId,
                    name: est.event.name,
                    banner: est.event.banner
                },
                banner:{
                    id: est.bannerTypeId,
                    name: est.bannerType.name,
                    description: est.bannerType.description
                }
            }
        })

        return estandartes
    }

 

}