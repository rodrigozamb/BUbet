import { PrismaUserNotificationsRepository } from "@/repositories/prisma/prisma-user-notifications-repository"
import { VisualizeNotificationsUseCase } from "../notifications/visualize-notifications-use-case"

export function makeVisualizeNotificationsUseCase(){
    const userNotificationsRepository = new PrismaUserNotificationsRepository()
    const useCase = new VisualizeNotificationsUseCase(userNotificationsRepository)

    return useCase
}