import { makeCreateUserUseCase } from "@/use-cases/factories/make-create-user-use-case";
import { resend_sendNewUsercreatedEmail } from "@/utils/sendMail";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function createUser(req:FastifyRequest, res: FastifyReply){

    const createUserBodySchema = z.object({
        name: z.string().min(5).max(100),
        username: z.string().min(5).max(50),
        password: z.string().min(5).max(50),
        email: z.string().email(),
    })
    const profile_image = req.file
    const {email,name,password,username} = createUserBodySchema.parse(req.body)

    const createUserUseCase = makeCreateUserUseCase()
    const { user } = await createUserUseCase.execute({
        email,
        name,
        password,
        username,
        profile_image
    })

    await resend_sendNewUsercreatedEmail("rodrigozamboni2@gmail.com", name, email)
    return res.status(201).send()
}
