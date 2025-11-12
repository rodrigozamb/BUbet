import { Notification, Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { NotificationsRepository } from "../notifications-repository";

export class PrismaNotificationsRepository implements NotificationsRepository{
    async listNotifications(user_id: string): Promise<Notification[]> {
        return await prisma.notification.findMany({
            where:{
                userId: user_id,
            }
        })
    }

    async create(data: Prisma.NotificationUncheckedCreateInput): Promise<Notification> {
        return await prisma.notification.create({
            data
        })
    }

}