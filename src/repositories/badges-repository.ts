import { Badge, Prisma } from "@prisma/client";

export interface BadgesRepository{
    listBadges(): Promise<Badge[]>
    create(data: Prisma.BadgeUncheckedCreateInput):Promise<Badge>
    assign(badgeId: string, users: string[]): Promise<string>
}