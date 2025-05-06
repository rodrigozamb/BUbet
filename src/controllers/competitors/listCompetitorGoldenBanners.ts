import { makeFindJudgeUseCase } from "@/use-cases/factories/make-find-judge-use-case";
import { makeListEventGoldenBannersUseCase } from "@/use-cases/factories/make-list-competitor-golden-banners-use-case";
import { makeListCompetitorGoldenBannersUseCase } from "@/use-cases/factories/make-list-event-golden-banners-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function listCompetitorGoldenBanners(req: FastifyRequest, res: FastifyReply){

    const listCompetitorGoldenBannersParamsSchema = z.object({
        competitor_id: z.string().uuid()
    })

    const {competitor_id } = listCompetitorGoldenBannersParamsSchema.parse(req.params)
    
    const listCompetitorGoldenBannersUseCase = makeListCompetitorGoldenBannersUseCase()
    const { estandartes } = await listCompetitorGoldenBannersUseCase.execute({competitor_id})

    return res.status(201).send(estandartes)
}