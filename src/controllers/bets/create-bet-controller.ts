import { makeCreateBetUseCase } from "@/use-cases/factories/make-create-bet-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";


export async function createBet(req: FastifyRequest, res: FastifyReply){

    const createBetBodySchema = z.object({
        bets: z.array(z.string()),
        cupom:z.string().optional()
    })

    const createBetParamsSchema = z.object({
        event_id: z.string().uuid(),
    })
    
    const { bets, cupom } = createBetBodySchema.parse(req.body)
    const { event_id } = createBetParamsSchema.parse(req.params)

    const createBetUseCase = makeCreateBetUseCase()
    const { bet } = await createBetUseCase.execute({
        bets,
        event_id,
        user_id: req.user.sub,
        cupom
    })

    return res.status(201).send(bet)
}