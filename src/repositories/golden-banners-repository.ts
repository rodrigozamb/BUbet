import { GoldenBanner, Prisma } from "@prisma/client";

export interface Estandarte{
    event:{
        id: string,
        name: string,
        banner: string,
    },
    banner:{
        id: string,
        name: string,
        description: string,
    }

}

export interface GoldenBannersRepository{
    findByEvent(event_id: string): Promise<Estandarte[]>
    findByCompetitor(competitor_id: string): Promise<Estandarte[]>
    createGoldenBannersBet(data: Prisma.GoldenBannerCreateManyInput[] ):Promise<boolean>
}