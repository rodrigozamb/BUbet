
import { FastifyInstance } from "fastify"
import { verifyJWT } from "@/middlewares/verify-jwt"
import { createBannerBet } from "./createBannerBet";

export async function goldenBannersRoutes (app: FastifyInstance){

    app.addHook('onRequest',verifyJWT)

    app.post('/estandartes/:event_id/:bet_id', createBannerBet)
        
}
