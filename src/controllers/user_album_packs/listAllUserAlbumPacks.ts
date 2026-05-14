import { makeListAllUserAlbumPacksUseCase } from "@/use-cases/factories/make-list-all-user-album-packs-use-case";
import { FastifyReply, FastifyRequest } from "fastify";

export async function listAllUserAlbumPacks(req: FastifyRequest, res: FastifyReply){

    
    const listAllUserAlbumPacksUseCase = makeListAllUserAlbumPacksUseCase()
    const { packs, cards } = await listAllUserAlbumPacksUseCase.execute({
        user_id: req.user.sub
    })

    return res.status(201).send({ packs, cards })
}