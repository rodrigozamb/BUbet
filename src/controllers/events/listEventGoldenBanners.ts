import { makeFindJudgeUseCase } from "@/use-cases/factories/make-find-judge-use-case";
import { makeListEventGoldenBannersUseCase } from "@/use-cases/factories/make-list-competitor-golden-banners-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function listEventGoldenBanners(req: FastifyRequest, res: FastifyReply){

    const listEventGoldenBannersParamsSchema = z.object({
        event_id: z.string().uuid()
    })

    const {event_id } = listEventGoldenBannersParamsSchema.parse(req.params)
    
    const listEventGoldenBannersUseCase = makeListEventGoldenBannersUseCase()
    const { estandartes } = await listEventGoldenBannersUseCase.execute({event_id})

    return res.status(201).send(estandartes)
}