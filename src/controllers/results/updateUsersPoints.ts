import { makeUpdateAllUsersPointsUseCase } from "@/use-cases/factories/make-update-all-users-points-use-case";
import { FastifyReply, FastifyRequest } from "fastify";

export async function updateUserPoints(req: FastifyRequest, res: FastifyReply){


    const updateUserPointsUseCase = makeUpdateAllUsersPointsUseCase()
    const {  } = await updateUserPointsUseCase.execute({})

    return res.status(201).send()
}