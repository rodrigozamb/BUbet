import { makeGetGuessBetUseCase } from "@/use-cases/factories/make-get-guess-bet-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";


export async function getGuessBet(req: FastifyRequest, res: FastifyReply){

    const getBetParamSchema = z.object({
        event_id: z.string().uuid(),
    })

    const { event_id } = getBetParamSchema.parse(req.params)

    const getGuessBetUseCase = makeGetGuessBetUseCase()
    const { bet } = await getGuessBetUseCase.execute({
        event_id,
        user_id: req.user.sub
    })

    return res.status(200).send(bet)
}