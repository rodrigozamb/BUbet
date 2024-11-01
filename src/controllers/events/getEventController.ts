import { makeGetEventUseCase } from "@/use-cases/factories/make-get-event-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";


export async function getEvent(req: FastifyRequest, res: FastifyReply){

    const getEventParamsSchema = z.object({
        eventId: z.string().uuid()
    })

    const {eventId} = getEventParamsSchema.parse(req.params)
    
    const getEventUseCase = makeGetEventUseCase()
    const { event } = await getEventUseCase.execute({
        event_id: eventId
    })

    return res.status(200).send(event)
}