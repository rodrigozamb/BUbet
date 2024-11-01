import { Competitor, Prisma } from "@prisma/client";
import { CompetitorsRepository } from "../competitors-repository";
import { prisma } from "@/lib/prisma";

export class PrismaCompetitorsRepository implements CompetitorsRepository{


    async findManyByIds(ids: string[]): Promise<Competitor[]> {
        return await prisma.competitor.findMany({
            where:{
                
            }
        })
    }


    async update(competitor_id: string, data: Prisma.CompetitorUpdateInput): Promise<Competitor> {
        return await prisma.competitor.update({
            data,
            where:{
                id: competitor_id
            }
        }) 
    }
    
    async findAll(): Promise<Competitor[]> {
        return await prisma.competitor.findMany()
    }

    async findByExactName(name: string): Promise<Competitor | null> {
        return await prisma.competitor.findFirst({
            where:{name}
        })
    }

    async findByName(name: string): Promise<Competitor[] | null> {
        return await prisma.competitor.findMany({
            where:{name}
        })
    }

    async findById(id: string): Promise<Competitor | null> {
        return await prisma.competitor.findUnique({
            where:{id}
        })
    }

    async create(data: Prisma.CompetitorCreateInput): Promise<Competitor> {
        const competitor = await prisma.competitor.create({
            data
        }) 

        return competitor
    }

}