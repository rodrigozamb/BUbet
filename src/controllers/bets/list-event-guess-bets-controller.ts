import { makeListGuessEventBetsUseCase } from "@/use-cases/factories/make-list-guess-event-bets-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function listGuessEventBets(req: FastifyRequest, res: FastifyReply){
    
    const getBetParamSchema = z.object({
        event_id: z.string().uuid(),
    })

    const { event_id } = getBetParamSchema.parse(req.params)
    const listGuessBetsUseCase = makeListGuessEventBetsUseCase()
    const { bets } = await listGuessBetsUseCase.execute({
        event_id: event_id
    })

    return res.status(201).send(bets)
}