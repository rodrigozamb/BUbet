import { makeGetEventByPackIdUseCase } from "@/use-cases/factories/make-get-event-by-pack-id-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function getEventByPackId(req: FastifyRequest, res: FastifyReply){
    
    const getAlbumByPackIdParamSchema = z.object({
        pack_id: z.string().uuid(),
    })

    const { pack_id } = getAlbumByPackIdParamSchema.parse(req.params)

    const getEventByPackIdUseCase = makeGetEventByPackIdUseCase()
    const { event } = await getEventByPackIdUseCase.execute({ pack_id })
    
    return res.status(200).send(event)
}