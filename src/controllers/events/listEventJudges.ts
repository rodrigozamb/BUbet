import { makeListEventJudgesUseCase } from "@/use-cases/factories/make-list-event-judges-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function listEventJudges(req: FastifyRequest, res: FastifyReply){

    const listEventJudgesParamsSchema = z.object({
        eventId: z.string().uuid()
    })

    const {eventId}  = listEventJudgesParamsSchema.parse(req.params)
    
    const listEventJudgesUseCase = makeListEventJudgesUseCase()
    const { judges } = await listEventJudgesUseCase.execute({event_id: eventId})

    return res.status(201).send(judges)
}