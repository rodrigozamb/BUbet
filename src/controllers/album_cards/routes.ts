
import { FastifyInstance } from "fastify"
import { verifyJWT } from "@/middlewares/verify-jwt"
import { openCardPack } from "./openCardPack"



export async function albumPacksRoutes (app: FastifyInstance){

    app.addHook('onRequest',verifyJWT)

    app.post('/cards/:pack_id/open', openCardPack )


}
