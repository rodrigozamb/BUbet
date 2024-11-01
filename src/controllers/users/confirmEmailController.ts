import { makeConfirmEmailUseCase } from "@/use-cases/factories/make-confirm-email-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";



export async function confirmEmail(req: FastifyRequest, res: FastifyReply){

    const confirmEmailParamsSchema = z.object({
        user_id: z.string().uuid(),
    })

    

    const {user_id} = confirmEmailParamsSchema.parse(req.params)
    
    const confirmEmailUseCase = makeConfirmEmailUseCase()
    const { } = await confirmEmailUseCase.execute({
        user_id
    })

    return res.status(200).send()
}