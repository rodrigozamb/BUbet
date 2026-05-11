import { makeAddAlbumPackToUserUseCase } from "@/use-cases/factories/make-add-album-pack-to-user-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function addAlbumPackToUser(req: FastifyRequest, res: FastifyReply){

    const addAlbumPackToUserBodySchema = z.object({
        quantity: z.number().int().positive().default(1)
    })
    
    const openCardPackParamSchema = z.object({
        pack_id: z.string().uuid(),
    })

    const { pack_id } = openCardPackParamSchema.parse(req.params)
    const { quantity } = addAlbumPackToUserBodySchema.parse(req.body)
    
    const addAlbumPackToUserUseCase = makeAddAlbumPackToUserUseCase()
    const { message } = await addAlbumPackToUserUseCase.execute({
        pack_id,
        user_id: req.user.sub,
        quantity
    })

    return res.status(201).send({ message })
}