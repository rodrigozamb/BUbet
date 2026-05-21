import { makeDeleteTradeUseCase } from "@/use-cases/factories/make-delete-trade-use-case";
import { makeListTradesUseCase } from "@/use-cases/factories/make-list-trades-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function deleteTrade(req: FastifyRequest, res: FastifyReply){
    const acceptTradePackParamsSchema = z.object({
        trade_id: z.string().uuid(),
    })

    const { trade_id } = acceptTradePackParamsSchema.parse(req.params)
    const deleteTradeUseCase = makeDeleteTradeUseCase()
    await deleteTradeUseCase.execute({ trade_id: trade_id, from_user_id: req.user.sub })
    
    return res.status(200).send({ message: "Trade deleted successfully" })
}