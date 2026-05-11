
import { FastifyInstance } from "fastify"
import { verifyJWT } from "@/middlewares/verify-jwt"
import { listAllCardPacks } from "./listAllCardPacksController"



export async function cardPacksRoutes (app: FastifyInstance){

    app.addHook('onRequest',verifyJWT)

    app.get('/cards/loja', listAllCardPacks)


}
