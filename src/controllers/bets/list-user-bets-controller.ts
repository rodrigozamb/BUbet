import { makelistUserBetsUseCase } from "@/use-cases/factories/make-list-user-bets-use-case";
import { FastifyReply, FastifyRequest } from "fastify";

export async function listUserBets(req: FastifyRequest, res: FastifyReply){
    
    const listBetsUseCase = makelistUserBetsUseCase()
    const { bets } = await listBetsUseCase.execute({
        user_id: req.user.sub
    })

    return res.status(201).send(bets)
}