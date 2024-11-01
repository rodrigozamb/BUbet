import { Prisma, Event, User, Bets } from "@prisma/client";

export interface BetsRepository{
    findByIds(user_id: string, event_id: string): Promise<Bets | null >
    listUserBets(user_id: string): Promise<Bets[]>
    create(data: Prisma.BetsUncheckedCreateInput):Promise<Bets>
}