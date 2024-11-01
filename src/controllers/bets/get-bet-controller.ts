import { makeGetBetUseCase } from "@/use-cases/factories/make-get-bet-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";


export async function getBet(req: FastifyRequest, res: FastifyReply){

    const getBetParamSchema = z.object({
        event_id: z.string().uuid(),
    })

    const { event_id } = getBetParamSchema.parse(req.params)

    const getBetUseCase = makeGetBetUseCase()
    const { bet } = await getBetUseCase.execute({
        event_id,
        user_id: req.user.sub
    })

    return res.status(201).send(bet)
}