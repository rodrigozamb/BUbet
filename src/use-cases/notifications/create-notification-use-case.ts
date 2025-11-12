import { Notification } from "@prisma/client"
import { NotificationsRepository } from "@/repositories/notifications-repository"

interface CreateNotificationUseCaseRequest{
    title: string,
    content:string,
    icon: string | undefined ,
    link: string | undefined 
}

interface CreateNotificationUseCaseResponse{
    notification: Notification
}

export class CreateNotificationUseCase{

    constructor(
        private notificationRepository:NotificationsRepository,
    ){}
    
    async execute({ content, icon, title, link }:CreateNotificationUseCaseRequest): Promise<CreateNotificationUseCaseResponse>{

        const notification = await this.notificationRepository.create({content, title,icon, link})
       
        return {
            notification
        }
    }

}