import { Prisma, GuessBets } from "@prisma/client";

export interface GuessBetsRepository{
    findByIds(user_id: string, event_id: string): Promise<GuessBets | null >
    listUserBets(user_id: string): Promise<GuessBets[]>
    create(data: Prisma.GuessBetsUncheckedCreateInput):Promise<GuessBets>
}