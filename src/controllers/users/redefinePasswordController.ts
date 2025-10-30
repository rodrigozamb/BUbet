import { makeUpdateUserUseCase } from "@/use-cases/factories/make-update-user-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { decodeJwtManually } from "@/utils/decode-jwt"
import { JwtPayload, verify } from "jsonwebtoken"
import { env } from "@/env";


interface MyPayload extends JwtPayload {
  user_id: string;
  email: string;
}
export async function updateUserPassword(req: FastifyRequest, res: FastifyReply){

    const updateUserPasswordBodySchema = z.object({
        token:z.string(),
        password: z.string().min(5).max(50)
    })

    
    const {password, token} = updateUserPasswordBodySchema.parse(req.body)

    const redefine_obj = decodeJwtManually(token)
    const decoded = verify(token, env.FORGET_PASSWORD_SECRET) as MyPayload;

    const updateUserUseCase = makeUpdateUserUseCase()
    const { user } = await updateUserUseCase.execute({
        user_id: decoded.user_id,
        password,
        email: undefined,
        name: undefined,
        username: undefined
    })

    return res.status(201).send(user)
}