import { PrismaNotificationsRepository } from "@/repositories/prisma/prisma-notifications-repository"
import { CreateNotificationUseCase } from "../notifications/create-notification-use-case"

export function makeCreateNotificationUseCase(){
    const notificationsRepository = new PrismaNotificationsRepository()
    const useCase = new CreateNotificationUseCase(notificationsRepository)

    return useCase
}