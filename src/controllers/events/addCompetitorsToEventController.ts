import { makeAddCompetitorsToEventUseCase } from "@/use-cases/factories/make-add-competitors-to-event-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";



export async function addCompetitorToEvent(req: FastifyRequest, res: FastifyReply){

    const addCompetitorsToEventBodySchema = z.object({
        competitors: z.array(z.string())
    })
    const addCompetitorsToEventParamsSchema = z.object({
        eventId: z.string().uuid()
    })

    const { competitors } = addCompetitorsToEventBodySchema.parse(req.body)
    const { eventId } = addCompetitorsToEventParamsSchema.parse(req.params)

    const addCompetitorsToEventUseCase = makeAddCompetitorsToEventUseCase()
    const { event } = await addCompetitorsToEventUseCase.execute({
        competitors,
        eventId
    })

    return res.status(201).send(event)
}