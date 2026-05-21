import { makeGetAlbumCardsByAlbumIdUseCase } from "@/use-cases/factories/make-get-album-cards-by-album-id-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function listAlbumCardsByAlbumId(req: FastifyRequest, res: FastifyReply){

    

    const listAlbumCardsParamSchema = z.object({
        album_id: z.string().uuid(),
    })

    const { album_id } = listAlbumCardsParamSchema.parse(req.params)

    const listAlbumUseCase = makeGetAlbumCardsByAlbumIdUseCase()
    const { cards } = await listAlbumUseCase.execute({
        album_id: album_id
    })

    return res.status(201).send({ cards })
}