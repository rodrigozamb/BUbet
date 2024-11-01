import { makeCreateEventResultUseCase } from "@/use-cases/factories/make-create-event-result-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function createResult(req: FastifyRequest, res: FastifyReply){

    const createResultBodySchema = z.object({
        event_id: z.string().uuid(),
        competitor_id: z.string().uuid(),
        place: z.string(),
        score: z.coerce.number().positive()
    })

    const {event_id, competitor_id, place, score } = createResultBodySchema.parse(req.body)
    
    const createResultUseCase = makeCreateEventResultUseCase()
    const { result } = await createResultUseCase.execute({
        competitor_id,
        event_id,
        place,
        score
    })

    return res.status(201).send(result)
}