import { GuessBets, Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { GuessBetsRepository } from "../guess-bets-repository";

export class PrismaGuessBetsRepository implements GuessBetsRepository{
    async findByIds(user_id: string, event_id: string): Promise<GuessBets | null> {
    
        const bet =  await prisma.guessBets.findFirst({
            where:{
                AND:[
                    {
                        userId: user_id
                    },
                    {
                        guessEventId: event_id
                    }
                ]
            }
        })

        return bet
        
    }

    async listUserBets(user_id: string): Promise<GuessBets[]> {
    
        const bets =  await prisma.guessBets.findMany({
            where:{
                AND:[
                    {
                        userId: user_id
                    }
                ]
            }
        })

        return bets
    }

    async create(data: Prisma.GuessBetsUncheckedCreateInput): Promise<GuessBets> {
        return await prisma.guessBets.create({
            data
        })
    }


 

}