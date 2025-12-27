import { makeGetSeasonUseCase } from "@/use-cases/factories/make-get-season-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function getSeason(req: FastifyRequest, res: FastifyReply){

    const createUserSeasonParamsSchema = z.object({
        season_id: z.string().uuid()
    })

    const { season_id } = createUserSeasonParamsSchema.parse(req.params)
    
    const getSeasonUseCase = makeGetSeasonUseCase()
    const { result } = await getSeasonUseCase.execute({
        season_id
    })

    return res.status(201).send(result)
}