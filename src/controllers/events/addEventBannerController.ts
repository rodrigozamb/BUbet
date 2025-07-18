import { makeAddBannerUseCase } from "@/use-cases/factories/make-add-event-banner-use-case"; 
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";



export async function addEventBanner(req: FastifyRequest, res: FastifyReply){


    const addEventBannerParamsSchema = z.object({
        event_id: z.string().uuid()
    })

    const {event_id} = addEventBannerParamsSchema.parse(req.params)
    const banner = req.file
    
    const addEventBannerUseCase = makeAddBannerUseCase()
    const { event } = await addEventBannerUseCase.execute({
        banner,
        event_id
    })

    return res.status(201).send(event)
}