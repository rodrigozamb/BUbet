import { makeCreateGuessBetUseCase } from "@/use-cases/factories/make-create-guess-bet-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";


export async function createGuessBet(req: FastifyRequest, res: FastifyReply){

    const createBetBodySchema = z.object({
        guess: z.number().min(0)
    })

    const createBetParamsSchema = z.object({
        event_id: z.string().uuid(),
    })
    
    const { guess } = createBetBodySchema.parse(req.body)
    const { event_id } = createBetParamsSchema.parse(req.params)

    const createGuessBetUseCase = makeCreateGuessBetUseCase()
    const { bet } = await createGuessBetUseCase.execute({
        guess,
        event_id,
        user_id: req.user.sub,
    })

    return res.status(201).send(bet)
}