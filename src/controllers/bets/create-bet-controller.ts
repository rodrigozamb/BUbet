import { makeCreateBetUseCase } from "@/use-cases/factories/make-create-bet-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";


export async function createBet(req: FastifyRequest, res: FastifyReply){

    const createBetBodySchema = z.object({
        bets: z.array(z.string()),
    })

    const createBetParamsSchema = z.object({
        event_id: z.string().uuid(),
    })
    
    const { bets } = createBetBodySchema.parse(req.body)
    const { event_id } = createBetParamsSchema.parse(req.params)
    
    const createBetUseCase = makeCreateBetUseCase()
    const { bet } = await createBetUseCase.execute({
        bets,
        event_id,
        user_id: req.user.sub
    })

    return res.status(201).send(bet)
}