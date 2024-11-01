import { Prisma, Competitor } from "@prisma/client";

export interface CompetitorsRepository{
    findById(id:string) : Promise<Competitor | null>
    findAll():Promise<Competitor[]>
    findManyByIds(ids: string[]): Promise<Competitor[]>
    findByName(name:string) : Promise<Competitor[] | null>
    findByExactName(name:string) : Promise<Competitor | null>
    create(data: Prisma.CompetitorCreateInput):Promise<Competitor>
    update(user_id: string, data: Prisma.CompetitorUpdateInput): Promise<Competitor>
}