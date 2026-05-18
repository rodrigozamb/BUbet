
import { FastifyInstance } from "fastify"
import { verifyJWT } from "@/middlewares/verify-jwt"
import { listAllCardPacks } from "./listAllCardPacksController"
import { getEventByPackId } from "./getEventByPackId"
import { getAlbumByPackId } from "./getAlbumByPackId"



export async function cardPacksRoutes (app: FastifyInstance){

    app.addHook('onRequest',verifyJWT)

    app.get('/cards/loja', listAllCardPacks)
    app.get('/packs/event/:pack_id', getEventByPackId)
    app.get('/packs/album/:pack_id', getAlbumByPackId)


}
