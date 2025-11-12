import { UserNotificationsRepository } from "@/repositories/user-notifications-repository"

interface EmitNotificationUseCaseRequest{
    notification_id: string,
    to:string[]
}

interface EmitNotificationUseCaseResponse{
    result: string
}

export class EmitNotificationsUseCase{

    constructor(
        private userNotificationRepository:UserNotificationsRepository,
    ){}
    
    async execute({ notification_id, to }:EmitNotificationUseCaseRequest): Promise<EmitNotificationUseCaseResponse>{

        const notification_count = await this.userNotificationRepository.emitNotifications(notification_id, to)
       
        return {
            result: `Sended ${notification_count} notifications!`
        }
    }

}