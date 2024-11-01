import { makeUpdateUserUseCase } from "@/use-cases/factories/make-update-user-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";


export async function updateUser(req: FastifyRequest, res: FastifyReply){

    const updateUserBodySchema = z.object({
        name: z.string().min(5).max(100).optional(),
        username: z.string().min(5).max(50).optional(),
        password: z.string().min(5).max(50).optional(),
        email: z.string().email().optional(),
    })

    
    const {email,name,password,username} = updateUserBodySchema.parse(req.body)

    const updateUserUseCase = makeUpdateUserUseCase()
    const { user } = await updateUserUseCase.execute({
        user_id: req.user.sub,
        email,
        name,
        password,
        username
    })

    return res.status(201).send(user)
}