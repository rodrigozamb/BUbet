
import { PrismaUserNotificationsRepository } from "@/repositories/prisma/prisma-user-notifications-repository"
import { ListUserNotificationsUseCase } from "../notifications/list-user-notifications-use-case"

export function makeListUserNotificationsUseCase(){
    const userNotificationsRepository = new PrismaUserNotificationsRepository()
    const useCase = new ListUserNotificationsUseCase(userNotificationsRepository)

    return useCase
}