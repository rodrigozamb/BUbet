import { makeCreateBannersBetUseCase } from "@/use-cases/factories/make-create-banners-bet-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function createBannerBet(req:FastifyRequest, res: FastifyReply){

    const createBannerBetBodySchema = z.object({
        data: z.array(   z.object({ bannerTypeId: z.string().uuid(), competitorId: z.string().uuid() })      ),
    })
    const getBetParamSchema = z.object({
        event_id: z.string().uuid(),
    })

    const { event_id } = getBetParamSchema.parse(req.params)

    const { data } = createBannerBetBodySchema.parse(req.body)

    const create_data = data.map((bet)=>{
        return {
            bannerTypeId: bet.bannerTypeId,
            competitorId: bet.competitorId,
            eventId: event_id
        }
    })

    const createBannerBetUseCase = makeCreateBannersBetUseCase()
    const {  } = await createBannerBetUseCase.execute({
        data: create_data
    })

    return res.status(201).send()
}
