import { makeAddJudgesToEventUseCase } from "@/use-cases/factories/make-add-judges-to-event-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";



export async function addJudgesToEvent(req: FastifyRequest, res: FastifyReply){

    const addJudgesToEventBodySchema = z.object({
        judges: z.array(z.string())
    })
    const addJudgesToEventParamsSchema = z.object({
        eventId: z.string().uuid()
    })

    const { judges } = addJudgesToEventBodySchema.parse(req.body)
    const { eventId } = addJudgesToEventParamsSchema.parse(req.params)

    const addJudgesToEventUseCase = makeAddJudgesToEventUseCase()
    const { event } = await addJudgesToEventUseCase.execute({
        judges,
        eventId
    })

    return res.status(201).send(event)
}