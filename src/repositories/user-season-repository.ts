import { Prisma, UserSeason } from "@prisma/client";

export interface UserSeasonsRepository{
    listUserSeasons(user_id: string): Promise<UserSeason[]>;
    fetchSeasonResults(season_id: string): Promise<UserSeason[]>;
    create(data: Prisma.UserSeasonUncheckedCreateInput): Promise<UserSeason>;
    bulkCreate(data: Prisma.UserSeasonUncheckedCreateInput[]): Promise<number>;
}