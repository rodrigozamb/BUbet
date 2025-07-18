import { Prisma, Event, Competitor, Bets, Judge, BannerType } from "@prisma/client";

export interface EventsRepository{
    create(data: Prisma.EventCreateInput):Promise<Event>
    update(data: Prisma.EventUpdateInput, event_id: string): Promise<Event>
    findById(id:string) : Promise<Event | null>
    findByName(name:string) : Promise<Event | null>
    addCompetitors(competitors: Competitor[], event_id: string):Promise<Event>
    addGoldenBannersTypes(event_id: string, banner_types: BannerType[]): Promise< Event >
    addJudges(judges: Judge[], event_id: string): Promise< Event >
    removeCompetitors(competitors: Competitor[], event_id: string):Promise<Event>
    findEventCompetitors(event_id: string):Promise<Competitor[]>
    findEventBets(event_id: string):Promise<Bets[] | null>
    listEventUsersRanking(event_id: string):Promise<Bets[]>
    listEventGoldenBannersTypes(id: string):Promise<BannerType[] | null>
    listActiveEvents():Promise<Event[]>
}