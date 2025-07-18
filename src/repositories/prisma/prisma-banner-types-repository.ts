import { BannerType } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { BannerTypesRepository } from "../banner-types-respository";

export class PrismaBannerTypesRepository implements BannerTypesRepository{
    async findAll(): Promise<BannerType[]> {
        return await prisma.bannerType.findMany()
    }

    async findById(id: string): Promise<BannerType | null> {
        const bannerType = await prisma.bannerType.findFirst({
            where:{
                id
            }
        })

        if(bannerType){
            return bannerType
        }else{
            return null
        }

    }
    

}