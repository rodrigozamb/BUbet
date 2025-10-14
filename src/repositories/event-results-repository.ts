import { Prisma, EventResults, Competitor } from "@prisma/client";

export interface EventsResultsRepository{
    findById(competitor_id: string,event_id: string) : Promise<EventResults | null>
    findByEventId(eventId:string) : Promise<EventResults[] | null>
    create(data: Prisma.EventResultsUncheckedCreateInput):Promise<EventResults>
    bulkCreate(data: Prisma.EventResultsUncheckedCreateInput[]):Promise<EventResults[]>
    applyPoints(event_id: string): Promise<null>
    updateUserPagePoints():Promise<any>
    updateUsersPositions():Promise<any>
    findEventCompetitors(event_id: string): Promise<Competitor[] | null>
    getCompetitorStatistics(competitor_id: string): Promise<{first: string,second: string,third: string,others: string, all: string}>
}