import { makeUpdateUserUseCase } from "@/use-cases/factories/make-update-user-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { decodeJwtManually } from "@/utils/decode-jwt"
import { makeForgetPasswordUseCase } from "@/use-cases/factories/make-forget_password-use-case";

export async function forgetPasswordController(req: FastifyRequest, res: FastifyReply){

    const updateUserPasswordBodySchema = z.object({
        email:z.string().email()
    })

    
    const {email} = updateUserPasswordBodySchema.parse(req.body)
    const forgetPasswordUseCase = makeForgetPasswordUseCase()
    await forgetPasswordUseCase.execute({email})

    return res.status(201).send()
}