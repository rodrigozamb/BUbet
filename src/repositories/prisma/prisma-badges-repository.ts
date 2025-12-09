import { Badge, Notification, Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { BadgesRepository } from "../badges-repository";

export class PrismaBadgesRepository implements BadgesRepository{
    async listBadges(): Promise<Badge[]> {
        return await prisma.badge.findMany({})
    }
    async create(data: Prisma.BadgeUncheckedCreateInput): Promise<Badge> {
        return await prisma.badge.create({
            data
        })
    }

    async assign(badgeId: string, users: string[]): Promise<string> {

        await prisma.badge.update({
            where: { id: badgeId},
            data: {
                users:{
                    connect: users.map( id => ({id}))
                }
            }
        })


        return "Success"
    }

}