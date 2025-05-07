import { makeListFeedbacksUseCase } from "@/use-cases/factories/make-list-feedbacks-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function listFeedBacks(req: FastifyRequest, res: FastifyReply){

    const listFeedBacksParamsSchema = z.object({
        verified: z.coerce.boolean()
    })

    let {verified } = listFeedBacksParamsSchema.parse(req.params)

    const listFeedBacksUseCase = makeListFeedbacksUseCase()
    const { feedbacks } = await listFeedBacksUseCase.execute({verified})

    return res.status(201).send(feedbacks)
}