import { Prisma, Event, Bets, GuessEvent, GuessBets } from "@prisma/client";

export interface GuessEventsRepository{
    create(data: Prisma.GuessEventCreateInput):Promise<GuessEvent>
    update(data: Prisma.GuessEventUpdateInput, event_id: string): Promise<GuessEvent>
    findById(id:string) : Promise<GuessEvent | null>
    findByName(name:string) : Promise<GuessEvent | null>
    findGuessEventBets(event_id: string):Promise<GuessBets[] | null>
    listActiveGuessEvents():Promise<GuessEvent[]>
}