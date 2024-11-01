import { Bets, Event, Prisma, User } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { BetsRepository } from "../bets-repository";

export class PrismaBetsRepository implements BetsRepository{
    async findByIds( userId: string, eventId: string): Promise<Bets | null> {
        return await prisma.bets.findUnique({
            where:{
                id:{
                    userId: userId,
                    eventId: eventId
                }
            }
        })
        
    }

    
    async listUserBets(userId: string): Promise<Bets[]> {
        return await prisma.bets.findMany({
            where:{
                userId
            },
            include:{
                event: true
            }
        })
    }


    async create(data: Prisma.BetsUncheckedCreateInput): Promise<Bets> {
        return await prisma.bets.create({
            data
        })
    }

 

}