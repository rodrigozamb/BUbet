import { makeCreateSeasonUseCase } from "@/use-cases/factories/make-create-season-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function createSeason(req: FastifyRequest, res: FastifyReply){

    const createUserSeasonBodySchema = z.object({
        name: z.string()
    })

    const { name } = createUserSeasonBodySchema.parse(req.body)

    const createSeasonUseCase = makeCreateSeasonUseCase()
    const { result } = await createSeasonUseCase.execute({
        name
    })

    return res.status(201).send(result)
}