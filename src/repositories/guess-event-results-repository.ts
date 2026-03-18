import { Prisma, GuessBetsResults } from "@prisma/client";

export interface GuessEventsResultsRepository{
    findById(competitor_id: string,event_id: string) : Promise<GuessBetsResults | null>
    findByEventId(eventId:string) : Promise<GuessBetsResults[] | null>
    create(data: Prisma.GuessBetsResultsUncheckedCreateInput):Promise<GuessBetsResults>
}