import { Prisma, Event, Competitor, Bets, User } from "@prisma/client";

export interface EventsRepository{
    create(data: Prisma.EventCreateInput):Promise<Event>
    findById(id:string) : Promise<Event | null>
    findByName(name:string) : Promise<Event | null>
    addCompetitors(competitors: Competitor[], event_id: string):Promise<Event>
    removeCompetitors(competitors: Competitor[], event_id: string):Promise<Event>
    findEventCompetitors(event_id: string):Promise<Competitor[]>
    findEventBets(event_id: string):Promise<Bets[] | null>
    listEventUsersRanking(event_id: string):Promise<Bets[]>
    listActiveEvents():Promise<Event[]>
}