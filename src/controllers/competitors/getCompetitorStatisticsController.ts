import { makeGetCompetitorStatisticsUseCase } from "@/use-cases/factories/make-get-competitor-statistics-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";


export async function getCompetitorStatistics(req: FastifyRequest, res: FastifyReply){

    const getCompetitorParamsSchema = z.object({
        competitorId: z.string().uuid()
    })

    const {competitorId} = getCompetitorParamsSchema.parse(req.params)
    
    const getCompetitorStatisticsUseCase = makeGetCompetitorStatisticsUseCase()
    const { first,second,third,others,all } = await getCompetitorStatisticsUseCase.execute({
        competitor_id: competitorId
    })

    return res.status(200).send({ first,second,third,others, all })
}