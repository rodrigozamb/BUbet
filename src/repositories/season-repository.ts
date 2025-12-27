import { Prisma, Season } from "@prisma/client";

export interface SeasonsRepository{
    listSeasons(): Promise<Season[]>;
    create(data: Prisma.SeasonUncheckedCreateInput): Promise<Season>;
    findById(id: string): Promise<Season | null>;
}