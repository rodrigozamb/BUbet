import { EmitNotificationsUseCase } from "../notifications/emit-notifications-use-case"
import { PrismaUserNotificationsRepository } from "@/repositories/prisma/prisma-user-notifications-repository"

export function makeEmitNotificationsUseCase(){
    const userNotificationsRepository = new PrismaUserNotificationsRepository()
    const useCase = new EmitNotificationsUseCase(userNotificationsRepository)

    return useCase
}