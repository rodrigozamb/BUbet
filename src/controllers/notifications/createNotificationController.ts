import { makeCreateNotificationUseCase } from "@/use-cases/factories/make-create-notification-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function createNotification(req:FastifyRequest, res: FastifyReply){

    const createNotificationBodySchema = z.object({
        title: z.string().min(5).max(50),
        content: z.string().min(5).max(150),
        icon: z.string().optional(),
        link: z.string().optional(),
    })
    
    const { content,title, icon, link } = createNotificationBodySchema.parse(req.body)

    const createNotificationUseCase = makeCreateNotificationUseCase()
    const { notification } = await createNotificationUseCase.execute({
        content,
        title,
        icon,
        link
    })
    
    return res.status(201).send(notification)
}
