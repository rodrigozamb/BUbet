import { makeListEventBannersTYpesUseCase } from "@/use-cases/factories/make-list-event-banners-types";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function listEventBannersTypes(req: FastifyRequest, res: FastifyReply){

    const listEventBannersTypesParamsSchema = z.object({
        eventId: z.string().uuid()
    })

    const {eventId}  = listEventBannersTypesParamsSchema.parse(req.params)
    
    const listEventBannersTypesUseCase = makeListEventBannersTYpesUseCase()
    const { estandartes } = await listEventBannersTypesUseCase.execute({event_id: eventId})

    return res.status(200).send(estandartes)
}