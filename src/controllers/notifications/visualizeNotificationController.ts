import { makeVisualizeNotificationsUseCase } from "@/use-cases/factories/make-visualize-notification-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function visualizeNotification(req:FastifyRequest, res: FastifyReply){

    const visualizeNotificationBodySchema = z.object({
        notification_id: z.string()
    })
    
    const { notification_id } = visualizeNotificationBodySchema.parse(req.params)

    const visualizeNotificationUseCase = makeVisualizeNotificationsUseCase()
    const { result } = await visualizeNotificationUseCase.execute({
        notification_id,
        user_id: req.user.sub
    })
    
    return res.status(200).send(result)
}
