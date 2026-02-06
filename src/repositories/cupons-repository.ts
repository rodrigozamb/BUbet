import { Cupons, Prisma, User } from "@prisma/client";

export interface CuponsRepository{
    addCupomToUser( data: Prisma.CuponsUncheckedCreateInput ): Promise<Cupons>
    checkUserLastCupom( competitor_id:string, days?: number ): Promise<boolean>
    assignCupomToBet(cupom_id: string, competitor_id:string, bet_id:string): Promise<Cupons>
    findById(cupom_id: string): Promise<Cupons|null>
     
}