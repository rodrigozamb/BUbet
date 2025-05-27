import { makeGetUserUseCase } from "@/use-cases/factories/make-get-user-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";


export async function getUser(req: FastifyRequest, res: FastifyReply){
    
    const getUserParamsSchema = z.object({
        user_id: z.string().uuid()
    })

    const {user_id} = getUserParamsSchema.parse(req.params)

    const getUserUseCase = makeGetUserUseCase()
    const { user } = await getUserUseCase.execute({
        user_id: user_id
    })

    return res.status(200).send({user:{...user, password_hash: undefined}})
}