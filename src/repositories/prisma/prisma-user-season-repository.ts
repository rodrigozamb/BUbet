import { Prisma, Season, UserSeason } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { UserSeasonsRepository } from "../user-season-repository";

export class PrismaUserSeasonsRepository implements UserSeasonsRepository{

    async fetchSeasonResults(season_id: string): Promise<UserSeason[]> {
        const a = await prisma.userSeason.findMany({
            where:{
                seasonId: season_id
            },
            include:{
                user:{
                    select:{
                        name: true,
                        profile_url: true,
                        id: true
                    }
                }
            },
            orderBy:{
                position:'asc'
            }
        })
        const z = a.filter(item => item.position > 0)
        const nz = a.filter(item => item.position < 1)
        return z.concat(nz);
    }

    async bulkCreate(data: Prisma.UserSeasonUncheckedCreateInput[]): Promise<number> {
        const users_seasons = await prisma.userSeason.createMany({
            data
        })
        return users_seasons.count;
    }

    async listUserSeasons(user_id: string): Promise<UserSeason[]> {

        const a = await prisma.userSeason.findMany({
            where:{
                userId: user_id,
            },
            include:{
                season:{
                    select:{
                        name: true,
                        id: true
                    }
                }
            }
        })

        return a
    }

    async create(data: Prisma.UserSeasonUncheckedCreateInput): Promise<UserSeason> {
        return await prisma.userSeason.create({
            data
        })
    }

 

}