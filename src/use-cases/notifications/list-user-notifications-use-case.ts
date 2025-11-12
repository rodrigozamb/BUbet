import { UserNotificationsRepository } from "@/repositories/user-notifications-repository"
import { UserNotification } from "@prisma/client"

interface ListUserNotificationUseCaseRequest{
    user_id: string
}

interface ListUserNotificationUseCaseResponse{
    result: UserNotification[]
}

export class ListUserNotificationsUseCase{

    constructor(
        private userNotificationRepository:UserNotificationsRepository,
    ){}
    
    async execute({ user_id }:ListUserNotificationUseCaseRequest): Promise<ListUserNotificationUseCaseResponse>{

        const notifications = await this.userNotificationRepository.listUserNotifications(user_id)
       
        return {
            result: notifications
        }
    }

}