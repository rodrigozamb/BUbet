import { makeListAllAlbumsCardsUseCase } from "@/use-cases/factories/make-list-all-albums-cards-use-case";
import { FastifyReply, FastifyRequest } from "fastify";

export async function listAllAlbumsCards(req: FastifyRequest, res: FastifyReply){

    console.log('LISTANDO ALL DOS ALL CARDS')
    const listAlbumUseCase = makeListAllAlbumsCardsUseCase()
    const { cards } = await listAlbumUseCase.execute({
    })

    return res.status(201).send({ cards })
}