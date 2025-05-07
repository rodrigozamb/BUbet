import { makeCreateFeedBackUseCase } from "@/use-cases/factories/make-create-feedback-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function createFeedback(req:FastifyRequest, res: FastifyReply){

    const createFeedbackBodySchema = z.object({
        content: z.string(),
    })
    const image = req.file
    const {content} = createFeedbackBodySchema.parse(req.body)

    const createFeedbackUseCase = makeCreateFeedBackUseCase()
    const { feedback } = await createFeedbackUseCase.execute({
        content,
        image,
        userId: req.user.sub
    })

    return res.status(201).send(feedback)
}
