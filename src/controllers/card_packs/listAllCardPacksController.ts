import { makeListAllCardPacksUseCase } from "@/use-cases/factories/make-list-all-card-packs-use-case";
import { FastifyReply, FastifyRequest } from "fastify";

export async function listAllCardPacks(req: FastifyRequest, res: FastifyReply){
    
    const listAllCardPacksUseCase = makeListAllCardPacksUseCase()
    const { packs } = await listAllCardPacksUseCase.execute()
    
    return res.status(200).send(packs)
}