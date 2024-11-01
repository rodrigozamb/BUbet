import { makeListCompetitorUseCase } from "@/use-cases/factories/make-list-competitor-use-case";
import { FastifyReply, FastifyRequest } from "fastify";

export async function listCompetitor(req: FastifyRequest, res: FastifyReply){
    
    const listCompetitorUseCase = makeListCompetitorUseCase()
    const { competitors } = await listCompetitorUseCase.execute()
    
    return res.status(200).send(competitors)
}