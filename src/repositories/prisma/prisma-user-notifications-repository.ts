import { Feedback, Prisma, UserNotification } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { UserNotificationsRepository } from "../user-notifications-repository";

export class PrismaUserNotificationsRepository implements UserNotificationsRepository{
    
    async listUserNotifications(user_id: string): Promise<UserNotification[]> {

        const a = await prisma.userNotification.findMany({
            where:{
                userId: user_id,
                is_visualized: null
            },
            include:{
                notification: {
                    select:{
                        content: true,
                        title: true,
                        icon: true,
                        link: true
                    }
                }
            }
        })

        return a
    }

    async emitNotifications(notification_id: string, to: string[]): Promise<number> {

        if(to.length > 0 && to[0] == "all" ){
            const users = await prisma.user.findMany({})
            to = users.map((user) => user.id)
        }

        const nots = await prisma.userNotification.createMany({
            data: to.map(userId => ({
                userId,
                notificationId:notification_id
            })),
            skipDuplicates: true 
        })

        return nots.count
    }

    async visualizeNotification(user_id: string, notification_id: string): Promise<boolean> {

        console.log(notification_id,user_id)
        const up = await prisma.userNotification.update({

            data:{
                is_visualized: new Date()
            },
            where:{
                userId: user_id,
                id: notification_id
            }
        })
    
        return true
    }

    async create(data: Prisma.FeedbackUncheckedCreateInput): Promise<Feedback> {
        return await prisma.feedback.create({
            data
        })
    }

 

}