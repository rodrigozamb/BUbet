import { makeCreateBulkEventResultUseCase } from "@/use-cases/factories/make-create-bulk-event-result-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function createBulkResult(req: FastifyRequest, res: FastifyReply){

    const createBulkResultBodySchema = z.object({
        event_id: z.string().uuid(),
        result: z.array( z.object({ id: z.string().uuid(), score: z.coerce.number().positive()}) )
    })

    const {event_id, result } = createBulkResultBodySchema.parse(req.body)
    
    const createBulkResultUseCase = makeCreateBulkEventResultUseCase()
    const { insertedCount } = await createBulkResultUseCase.execute({
        event_id,
        result
    })

    return res.status(201).send({message:`Created a result with ${insertedCount} competitors`})
}