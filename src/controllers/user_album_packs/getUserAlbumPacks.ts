import { makeGetUserAlbumPacksUseCase } from "@/use-cases/factories/make-get-user-album-packs-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function getUserAlbumPacks(req: FastifyRequest, res: FastifyReply){

    const getUserAlbumPacksParamSchema = z.object({
        pack_id: z.string().uuid(),
    })

    const { pack_id } = getUserAlbumPacksParamSchema.parse(req.params)
    
    const getUserAlbumPacksUseCase = makeGetUserAlbumPacksUseCase()
    const { packs } = await getUserAlbumPacksUseCase.execute({
        pack_id,
        user_id: req.user.sub
    })

    return res.status(201).send({ packs })
}