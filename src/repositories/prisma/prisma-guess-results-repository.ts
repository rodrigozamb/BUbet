import { GuessBetsResults, Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { GuessEventsResultsRepository } from "../guess-event-results-repository";

export class PrismaGuessEventResultsRepository implements GuessEventsResultsRepository{
    
    async findById(event_id: string): Promise<GuessBetsResults | null> {
        return await prisma.guessBetsResults.findFirst({
            where:{
                guessEventId: event_id,
            }
        })
    }

    async findByEventId(eventId: string): Promise<GuessBetsResults[] | null> {
        return await prisma.guessBetsResults.findMany({
            where:{ guessEventId: eventId },
        })
    }
    
    async create(data: Prisma.GuessBetsResultsUncheckedCreateInput): Promise<GuessBetsResults> {
        return await prisma.guessBetsResults.create({
            data
        })
    }

    
  

}