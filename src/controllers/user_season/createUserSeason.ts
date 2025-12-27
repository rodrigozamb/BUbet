import { makeCreateUsersSeasonUseCase } from "@/use-cases/factories/make-create-users-season-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function createUserSeason(req: FastifyRequest, res: FastifyReply){

    const createUserSeasonBodySchema = z.object({

        users : z.array(z.object({
            id: z.string().uuid(),
            place: z.coerce.number().gte(0),
            score: z.coerce.number().gte(0)

        })),
        season_id: z.string().uuid()
    })

    const { users, season_id } = createUserSeasonBodySchema.parse(req.body)
    
    const createUserSeasonUseCase = makeCreateUsersSeasonUseCase()
    const { result } = await createUserSeasonUseCase.execute({
        users,
        season_id
    })

    return res.status(201).send(result)
}