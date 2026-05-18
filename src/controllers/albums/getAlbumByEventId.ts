import { makeGetAlbumByEventIDUseCase } from "@/use-cases/factories/make-get-album-by-event-id-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function getAlbumByEventId(req: FastifyRequest, res: FastifyReply){
    const getAlbumByEventIdParamSchema = z.object({
        event_id: z.string().uuid(),
    })

    const { event_id } = getAlbumByEventIdParamSchema.parse(req.params)
    const getAlbumByEventIdUseCase = makeGetAlbumByEventIDUseCase()
    const { album } = await getAlbumByEventIdUseCase.execute({ event_id, user_id: req.user.sub })
    
    return res.status(200).send({ album })
}