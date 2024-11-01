import { makeApplyPointsUseCase } from "@/use-cases/factories/make-apply-points-use-case";
import { makeListEventUseCase } from "@/use-cases/factories/make-list-event-results";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function applyPoints(req: FastifyRequest, res: FastifyReply){

    const applyPointsBodySchema = z.object({
        event_id: z.string().uuid()
    })

    const { event_id } = applyPointsBodySchema.parse(req.body)
    
    const applyPointsUseCase = makeApplyPointsUseCase()
    const {  } = await applyPointsUseCase.execute({event_id})

    return res.status(201).send()
}