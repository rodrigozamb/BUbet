import { makelistUsersByRankUseCase } from "@/use-cases/factories/make-list-users-by-rank-use-case";
import { FastifyReply, FastifyRequest } from "fastify";


export async function listUsersByRank(req: FastifyRequest, res: FastifyReply){

 
    const listUsersByRankUseCase = makelistUsersByRankUseCase()
    const { users } = await listUsersByRankUseCase.execute({})

    return res.status(200).send(users)
}