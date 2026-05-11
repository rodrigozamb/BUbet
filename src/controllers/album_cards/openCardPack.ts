import { makeOpenCardPackUseCase } from "@/use-cases/factories/make-open-card-pack-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function openCardPack(req: FastifyRequest, res: FastifyReply){
    const openCardPackParamSchema = z.object({
        pack_id: z.string().uuid(),
    })

    const { pack_id } = openCardPackParamSchema.parse(req.params)
    const openCardPackUseCase = makeOpenCardPackUseCase()
    const { cards } = await openCardPackUseCase.execute({ pack_id, user_id: req.user.sub })
    
    return res.status(200).send(cards)
}