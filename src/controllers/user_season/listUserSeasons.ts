import { makeListUsersSeasonUseCase } from "@/use-cases/factories/make-list-users-season-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function listUserSeason(req: FastifyRequest, res: FastifyReply){

    const createUserSeasonParamsSchema = z.object({
        user_id: z.string().uuid()
    })

    const { user_id } = createUserSeasonParamsSchema.parse(req.params)
    
    const listUserSeasonUseCase = makeListUsersSeasonUseCase()
    const { result } = await listUserSeasonUseCase.execute({
        user_id
    })

    return res.status(201).send(result)
}