import { UserNotificationsRepository } from "@/repositories/user-notifications-repository"

interface VisualizeNotificationUseCaseRequest{
    notification_id: string,
    user_id: string,
}

interface VisualizeNotificationUseCaseResponse{
    result: boolean
}

export class VisualizeNotificationsUseCase{

    constructor(
        private userNotificationRepository:UserNotificationsRepository,
    ){}
    
    async execute({ notification_id, user_id }:VisualizeNotificationUseCaseRequest): Promise<VisualizeNotificationUseCaseResponse>{

        const bool = await this.userNotificationRepository.visualizeNotification(user_id, notification_id)
       
        return {
            result: bool
        }
    }

}