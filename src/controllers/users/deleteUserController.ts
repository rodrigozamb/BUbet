import { makeDeleteUserUseCase } from "@/use-cases/factories/make-delete-user-use-case";
import { FastifyReply, FastifyRequest } from "fastify";

export async function deleteUser(req: FastifyRequest, res: FastifyReply){    
    
    const deleteUserUseCase = makeDeleteUserUseCase()
    
    const { user } = await deleteUserUseCase.execute({
        user_id: req.user.sub
    })

    return res.status(201).send(user)
}