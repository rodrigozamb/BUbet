
import { FastifyInstance } from "fastify"
import { verifyJWT } from "@/middlewares/verify-jwt"
import { createBannerBet } from "./createBannerBet";
import { ListAllEstandartes } from "./listAllEstandartes";

export async function goldenBannersRoutes (app: FastifyInstance){

    app.addHook('onRequest',verifyJWT)

    app.get('/estandartes', ListAllEstandartes)
    app.post('/estandartes/:event_id/:bet_id', createBannerBet)
        
}
