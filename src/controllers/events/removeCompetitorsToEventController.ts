import { makeRemoveCompetitorsToEventUseCase } from "@/use-cases/factories/make-remove-competitors-to-event-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";



export async function removeCompetitorToEvent(req: FastifyRequest, res: FastifyReply){

    const removeCompetitorsToEventBodySchema = z.object({
        competitors: z.array(z.string())
    })
    const removeCompetitorsToEventParamsSchema = z.object({
        eventId: z.string().uuid()
    })

    const { competitors } = removeCompetitorsToEventBodySchema.parse(req.body)
    const { eventId } = removeCompetitorsToEventParamsSchema.parse(req.params)

    const removeCompetitorsToEventUseCase = makeRemoveCompetitorsToEventUseCase()
    const { event } = await removeCompetitorsToEventUseCase.execute({
        competitors,
        eventId
    })

    return res.status(201).send(event)
}