import { makeListTradesUseCase } from "@/use-cases/factories/make-list-trades-use-case";
import { FastifyReply, FastifyRequest } from "fastify";

export async function listTrades(req: FastifyRequest, res: FastifyReply){
    
    const listTradesPackUseCase = makeListTradesUseCase()
    const { trades } = await listTradesPackUseCase.execute({})
    
    return res.status(200).send(trades)
}