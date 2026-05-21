import { makeAcceptTradeUseCase } from "@/use-cases/factories/make-accept-trade-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function acceptTrade(req: FastifyRequest, res: FastifyReply){
    
    const acceptTradePackParamsSchema = z.object({
        trade_id: z.string().uuid(),
    })

    const { trade_id } = acceptTradePackParamsSchema.parse(req.params)
    

    const acceptTradeUseCase = makeAcceptTradeUseCase()
    const { trade } = await acceptTradeUseCase.execute({ trade_id ,to_user_id: req.user.sub })
    
    return res.status(200).send(trade)
}