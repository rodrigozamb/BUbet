import { UserNotification } from "@prisma/client";

export interface UserNotificationsRepository{
    listUserNotifications(user_id: string): Promise<UserNotification[]>
    emitNotifications(notification_id: string, to: string[]):Promise<number>
    visualizeNotification(user_id: string, notification_id: string): Promise<boolean>
}