import { makeListAllJudgesUseCase } from "@/use-cases/factories/make-list-all-judges-use-case";
import { FastifyReply, FastifyRequest } from "fastify";

export async function findAllJudges(req: FastifyRequest, res: FastifyReply){
    
    const listAllJudgesUseCase = makeListAllJudgesUseCase()
    const { judges } = await listAllJudgesUseCase.execute()

    return res.status(200).send(judges)
}