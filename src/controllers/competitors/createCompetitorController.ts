import { makeCreateCompetitorUseCase } from "@/use-cases/factories/make-create-competitor-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";


export async function createCompetitor(req: FastifyRequest, res: FastifyReply){

    const createCompetitorBodySchema = z.object({
        name: z.string().min(5).max(100),
        description: z.string().max(150),
    })

    const logo_image = req.file
    const { description,name } = createCompetitorBodySchema.parse(req.body)
    
    const createCompetitorUseCase = makeCreateCompetitorUseCase()
    const { competitor } = await createCompetitorUseCase.execute({
        description,
        name,
        logo_image
    })

    return res.status(201).send()
}