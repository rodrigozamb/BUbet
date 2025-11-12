import { Prisma, Notification } from "@prisma/client";

export interface NotificationsRepository{
    listNotifications(user_id: string): Promise<Notification[]>
    create(data: Prisma.NotificationCreateInput):Promise<Notification>
}