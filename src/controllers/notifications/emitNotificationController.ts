import { makeEmitNotificationsUseCase } from "@/use-cases/factories/make-emit-notifications-use-case ";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function emitNotification(req:FastifyRequest, res: FastifyReply){

    const emitNotificationBodySchema = z.object({
        notification_id: z.string(),
        to: z.string().array(),
    })
    
    const { notification_id, to } = emitNotificationBodySchema.parse(req.body)

    const emitNotificationUseCase = makeEmitNotificationsUseCase()
    const { result } = await emitNotificationUseCase.execute({
        notification_id,
        to
    })
    
    return res.status(201).send(result)
}
