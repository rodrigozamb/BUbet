import { makeConfirmEmailUseCase } from "@/use-cases/factories/make-confirm-email-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { env } from "@/env"


export async function confirmEmail(req: FastifyRequest, res: FastifyReply){

    const confirmEmailParamsSchema = z.object({
        user_id: z.string().uuid(),
    })

    

    const {user_id} = confirmEmailParamsSchema.parse(req.params)
    
    const confirmEmailUseCase = makeConfirmEmailUseCase()
    const { user } = await confirmEmailUseCase.execute({
        user_id
    })
    const token = await res.jwtSign(
        {
            name:user.name,
            profile_url: user.profile_url,
            id: user.id
        },
        {
        sign:{
            sub: user.id,
        }
    })
    return res.redirect(env.FRONTEND_URL+"/welcome/"+token)
}