import { makeAddBannerTypesToEventUseCase } from "@/use-cases/factories/make-add-banner-types-to-event-use-case copy";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";



export async function addBannerTypesToEvent(req: FastifyRequest, res: FastifyReply){

    const addBannerTypesToEventBodySchema = z.object({
        bannerTypes: z.array(z.string())
    })
    const addBannerTypesToEventParamsSchema = z.object({
        eventId: z.string().uuid()
    })

    const { bannerTypes } = addBannerTypesToEventBodySchema.parse(req.body)
    const { eventId } = addBannerTypesToEventParamsSchema.parse(req.params)

    const addBannerTypesToEventUseCase = makeAddBannerTypesToEventUseCase()
    const { event } = await addBannerTypesToEventUseCase.execute({
        bannerTypes,
        eventId
    })

    return res.status(201).send(event)
}