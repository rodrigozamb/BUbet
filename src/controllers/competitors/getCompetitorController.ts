import { makeGetCompetitorUseCase } from "@/use-cases/factories/make-get-competitor-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";


export async function getCompetitor(req: FastifyRequest, res: FastifyReply){

    const getCompetitorParamsSchema = z.object({
        competitorId: z.string().uuid()
    })

    const {competitorId} = getCompetitorParamsSchema.parse(req.params)
    
    const getCompetitorUseCase = makeGetCompetitorUseCase()
    const { competitor } = await getCompetitorUseCase.execute({
        competitor_id: competitorId
    })

    return res.status(200).send(competitor)
}