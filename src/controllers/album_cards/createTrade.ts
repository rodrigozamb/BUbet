import { makeCreateTradeUseCase } from "@/use-cases/factories/make-create-trade-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function createTrade(req: FastifyRequest, res: FastifyReply){
    const createTradePackBodySchema = z.object({
        offered_card_id: z.string().uuid(),
        offered_quantity: z.number().int().positive(),
        trade_card_id: z.string().uuid(),
        trade_quantity: z.number().int().positive(),
    })

    const { offered_card_id, offered_quantity, trade_card_id, trade_quantity } = createTradePackBodySchema.parse(req.body)
    
    const createTradePackUseCase = makeCreateTradeUseCase()
    const { trade } = await createTradePackUseCase.execute({ offered_card_id, offered_quantity, trade_card_id, trade_quantity, from_user_id: req.user.sub })
    
    return res.status(200).send(trade)
}