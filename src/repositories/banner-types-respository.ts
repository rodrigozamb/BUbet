import { BannerType } from "@prisma/client";

export interface BannerTypesRepository{
    findAll(): Promise<BannerType[]>
    findById(id: string): Promise<BannerType|null>
}