import { makeListEventUseCase } from "@/use-cases/factories/make-list-event-results";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function listEventResults(req: FastifyRequest, res: FastifyReply){

    const listEventResultsParamsSchema = z.object({
        event_id: z.string().uuid()
    })

    const {event_id } = listEventResultsParamsSchema.parse(req.params)
    
    const listEventResultsUseCase = makeListEventUseCase()
    const { result } = await listEventResultsUseCase.execute({event_id})

    return res.status(201).send(result)
}