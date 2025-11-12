import { makeListUserNotificationsUseCase } from "@/use-cases/factories/make-list-user-notifications-use-case";
import { FastifyReply, FastifyRequest } from "fastify";

export async function listUserNotification(req:FastifyRequest, res: FastifyReply){

    const listUserNotificationUseCase = makeListUserNotificationsUseCase()
    const { result } = await listUserNotificationUseCase.execute({
        user_id: req.user.sub
    })
    
    return res.status(201).send(result)
}
