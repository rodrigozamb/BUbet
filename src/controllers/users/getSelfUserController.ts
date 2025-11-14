import { makeGetSelfUserUseCase } from "@/use-cases/factories/make-get-self-user-use-case";
import { FastifyReply, FastifyRequest } from "fastify";


export async function getSelfUser(req: FastifyRequest, res: FastifyReply){
    
    const getSelfUserUseCase = makeGetSelfUserUseCase()
    const { user } = await getSelfUserUseCase.execute({
        user_id: req.user.sub
    })

    return res.status(200).send({user:{...user, password_hash: undefined}})
}