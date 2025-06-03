import { Bets, Event, Prisma, User } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { BetsRepository } from "../bets-repository";

export class PrismaBetsRepository implements BetsRepository{
    async findByIds( userId: string, eventId: string): Promise<Bets | null> {
        const bet =  await prisma.bets.findFirst({
            where:{
                AND:[
                    {
                        userId
                    },
                    {
                        eventId
                    }
                ]
            },
            include:{
                estandartes: {
                    select:{
                        competitor:{
                            select:{
                                name: true
                            }
                        },
                        bannerType:{
                            select:{
                                name:true
                            }
                        }
                    }
                }
            }
        })

        return bet
        
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