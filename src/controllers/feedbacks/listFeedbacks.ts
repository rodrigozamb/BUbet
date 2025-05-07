import { makeListFeedbacksUseCase } from "@/use-cases/factories/make-list-feedbacks-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function listFeedBacks(req: FastifyRequest, res: FastifyReply){

    const listFeedBacksParamsSchema = z.object({
        verified: z.string()
    })

    const {verified } = listFeedBacksParamsSchema.parse(req.params)
    let verify = false
    if(verified == "true"){
        verify = true
    }
    const listFeedBacksUseCase = makeListFeedbacksUseCase()
    const { feedbacks } = await listFeedBacksUseCase.execute({verified: verify})

    return res.status(201).send(feedbacks)
}