import { makeUpdateCompetitorUseCase } from "@/use-cases/factories/make-update-competitor-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";


export async function updateCompetitor(req: FastifyRequest, res: FastifyReply){

    const updateCompetitorBodySchema = z.object({
        competitor_id:z.string().uuid(),
        name: z.string().min(5).max(100).optional(),
        description: z.string().max(150).optional(),
        profile_url: z.string().optional(),
    })

    const { description,name,profile_url,competitor_id } = updateCompetitorBodySchema.parse(req.body)
    
    const updateCompetitorUseCase = makeUpdateCompetitorUseCase()
    const { competitor } = await updateCompetitorUseCase.execute({
        competitor_id,
        description,
        name,
        profile_url
    })

    return res.status(201).send(competitor)
}