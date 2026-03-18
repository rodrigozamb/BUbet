import { BannerType, Bets, Competitor, Event, GuessBets, GuessEvent, Judge, Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { GuessEventsRepository } from "../guess-events-repository";

export class PrismaGuessEventsRepository implements GuessEventsRepository{

    async create(data: Prisma.GuessEventCreateInput): Promise<GuessEvent> {
        const event = await prisma.guessEvent.create({
            data
        }) 

        return event
    }
    async update(data: Prisma.GuessEventUpdateInput, event_id: string): Promise<GuessEvent> {
        const event = await prisma.guessEvent.update({
            data,
            where:{
                id: event_id
            }
            
        }) 

        return event
    }
    async findById(id: string): Promise<GuessEvent | null> {
        return await prisma.guessEvent.findUnique({
            where:{id}
        })
    }
    async findByName(name: string): Promise<GuessEvent | null> {
        const event = await prisma.guessEvent.findFirst({
            where:{ name}
        })

        return event
    }
    async findGuessEventBets(event_id: string): Promise<GuessBets[] | null> {
        const res =  await prisma.guessEvent.findUnique({
            where:{
                id: event_id
            },
            include:{
                bets:{
                    include:{
                        user:{
                            select:{
                                name:true,
                                profile_url:true,
                                username: true,
                                id: true
                            }
                        }
                    }
                }
                
            }
        }) 

        if(!res){
            return null
        }

        return res.bets;
    }

    async listActiveGuessEvents(): Promise<GuessEvent[]> {
         return await prisma.guessEvent.findMany({
            where:{
            },
            orderBy:{
                created_at: 'desc'
            }
        })
    }
    
   

}