import { Competitor, EventResults, Prisma } from "@prisma/client";
import { EventsResultsRepository } from "../event-results-repository";
import { prisma } from "@/lib/prisma";

export class PrismaEventResultsRepository implements EventsResultsRepository{
    
    
    async findEventCompetitors(event_id: string): Promise<Competitor[] | null> {
        const event = await prisma.event.findUnique({
            where:{
                id: event_id
            },
            include:{
                competitors:{
                    orderBy:{
                        name:'asc'
                    }
                }
            }
        })

        if(!event){
            return null
        }
        return event.competitors
    }


    async getCompetitorStatistics(competitor_id: string): Promise<{ first: string; second: string; third: string; others: string; all:string }> {
        const results = await prisma.eventResults.findMany({
            where:{
                competitorId: competitor_id
            }
        })

        var first = 0, second = 0, third = 0, others = 0
    
        for(let i = 0 ; i < results.length ; i++){
            if (results[i].placing === "1"){
                first+=1
            }else
            if (results[i].placing === "2"){
                second+=1
            }else
            if (results[i].placing === "3"){
                third+=1
            }else
                others+=1
        }

        return {
            first: first.toString(), 
            second: second.toString(),
            third: third.toString(), 
            others: others.toString(),
            all: (first+second+third+others).toString()
        }
    }
    
    
    async applyPoints(event_id: string): Promise<null> {
     
        const event = await prisma.event.findUnique({
            where:{id:event_id},
            include:{
                eventResults: true
            }
        })
        const event_result = event?.eventResults
        if(!event_result){
            return null
        }
        event_result.sort((a,b) => Number(a.placing) - Number(b.placing) )
        const bets = await prisma.bets.findMany({
            where:{
                eventId: event_id
            },
            orderBy:{
                userId:'asc'
            }
        }) 

        const promises:any = []
        bets.forEach(async (bet)=>{
            const points = this.calculatePoints(bet.bets, event_result)

            return await prisma.bets.updateMany({
                data:{
                    points
                },
                where:{
                    userId: bet.userId,
                    eventId: bet.eventId,
                }
            })


        })
        var updatedBets = await Promise.all(promises)
        updatedBets = updatedBets.filter(n => n)

        return null;
    }


    calculatePoints(userBets: string[], results: EventResults[]){

        const max_points = results.length
        let pts = 0

        for(let i=0; i < results.length;i++){
            if(userBets[i] === results[i].competitorId){
                pts +=  (max_points-i)
            }
        }

        return pts
        
    }
    
    async bulkCreate(data: Prisma.EventResultsCreateManyInput[]): Promise< EventResults[] > {
        const promises:any = []
        data.forEach((result)=>{
            promises.push(
                prisma.eventResults.create({data:result})
            )
        })
        await Promise.all(promises)
        const results = await prisma.eventResults.findMany({where:{ eventId: data[0].eventId }})
        return results
    }

    async create(data: Prisma.EventResultsUncheckedCreateInput): Promise<EventResults> {
        return await prisma.eventResults.create({
            data
        })
    }
    
    async findByEventId(eventId: string): Promise<EventResults[] | null> {
        return await prisma.eventResults.findMany({
            where:{eventId},
            orderBy:{
                score: "desc"
            },
            include:{
                competitor: true,
                estandartes: {
                    select:{
                        name: true
                    }
                },
                
            }
        })
    }

    async findById(competitor_id: string,event_id: string): Promise<EventResults | null> {
        return await prisma.eventResults.findFirst({
            where:{
                AND:[
                    {competitorId: competitor_id},
                    {eventId: event_id}
                ]
            }
        })
    }
    


}