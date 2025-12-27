import { Prisma, Season } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { SeasonsRepository } from "../season-repository";

export class PrismaSeasonsRepository implements SeasonsRepository{
    async findById(id: string): Promise<Season | null> {
        return await prisma.season.findUnique({
            where:{
                id
            }
        })
    }

    async listSeasons(): Promise<Season[]> {

        const a = await prisma.season.findMany({
            where:{ }
        })

        return a
    }

    async create(data: Prisma.SeasonUncheckedCreateInput): Promise<Season> {
        return await prisma.season.create({
            data
        })
    }

}