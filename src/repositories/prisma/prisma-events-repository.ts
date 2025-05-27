import { BannerType, Bets, Competitor, Event, GoldenBanner, Prisma, User } from "@prisma/client";
import { EventsRepository } from "../events-repository";
import { prisma } from "@/lib/prisma";

export class PrismaEventsRepository implements EventsRepository{
    
    async listActiveEvents(): Promise<Event[]> {
        return await prisma.event.findMany({
            where:{
            },
            orderBy:{
                starts_at:'asc'
            }
        })
    }

    async listEventUsersRanking(event_id: string): Promise<Bets[]> {
        return await prisma.bets.findMany({
            where:{
                eventId: event_id,
            },
            orderBy:{
                points:'desc'
            },
            include:{
                user:true
            }
            
        })
    }


    async addCompetitors(competitors: Competitor[], event_id: string): Promise< Event > {

        const event = await prisma.event.findUnique({
            where:{
                id: event_id
            }
        })
        
        
        const updatedEvent = await prisma.event.update({
            where: { id: event_id },
            data: {
                competitors:{
                    connect: competitors.map(id => ( id ))
                }
            }
        })

        return updatedEvent
    }

    async removeCompetitors(competitors: Competitor[], event_id: string): Promise< Event > {

        const event = await prisma.event.findUnique({
            where:{
                id: event_id
            }
        })
        
        
        const updatedEvent = await prisma.event.update({
            where: { id: event_id },
            data: {
                competitors:{
                    disconnect: competitors.map(id => ( id ))
                }
            }
        })

        return updatedEvent
    }

    async findEventCompetitors(event_id: string): Promise<Competitor[] > {
        const res =  await prisma.event.findUnique({
            where:{
                id: event_id
            },
            include:{
                competitors: {
                    orderBy:{
                        name:'asc'
                    }
                },
            }
        }) 

        if(!res){
            return []
        }

        return res.competitors
    }

    async findEventBets(event_id: string): Promise<Bets[] | null> {
        
        const res =  await prisma.event.findUnique({
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
    
    async listEventGoldenBannersTypes(id: string):Promise<BannerType[] | null>{

        const res = await prisma.event.findFirst({
            where:{id},
            include:{
                event_banner_types: true
            }
            
        })
        if(!res){
            return null
        }

        return res.event_banner_types
    }

    async findByName(name: string): Promise<Event | null> {
        return await prisma.event.findFirst({
            where:{name}
        })
    }

    async findById(id: string): Promise<Event | null> {
        return await prisma.event.findUnique({
            where:{id}
        })
    }

    async create(data: Prisma.EventCreateInput): Promise<Event> {
        const event = await prisma.event.create({
            data
        }) 

        return event
    }

}