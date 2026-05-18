import { makeGetAlbumByPackIdUseCase } from "@/use-cases/factories/make-get-album-by-pack-id-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function getAlbumByPackId(req: FastifyRequest, res: FastifyReply){
    
    const getAlbumByPackIdParamSchema = z.object({
        pack_id: z.string().uuid(),
    })

    const { pack_id } = getAlbumByPackIdParamSchema.parse(req.params)

    const getAlbumByPackIdUseCase = makeGetAlbumByPackIdUseCase()
    const { album } = await getAlbumByPackIdUseCase.execute({ pack_id })
    
    return res.status(200).send(album)
}