import { makeFetchSeasonResultsUseCase } from "@/use-cases/factories/make-fetch-season-results-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function listSeasonResults(req: FastifyRequest, res: FastifyReply){

    const createUserSeasonParamsSchema = z.object({
        season_id: z.string().uuid()
    })

    const { season_id } = createUserSeasonParamsSchema.parse(req.params)
    
    const fetchSeasonResultsUseCase = makeFetchSeasonResultsUseCase()
    const { result } = await fetchSeasonResultsUseCase.execute({
        season_id
    })

    return res.status(200).send(result)
}