import { makeGetUserUseCase } from "@/use-cases/factories/make-get-user-use-case";
import { FastifyReply, FastifyRequest } from "fastify";


export async function getUser(req: FastifyRequest, res: FastifyReply){
    
    const getUserUseCase = makeGetUserUseCase()
    const { user } = await getUserUseCase.execute({
        user_id: req.user.sub
    })

    return res.status(200).send({user:{...user, password_hash: undefined}})
}