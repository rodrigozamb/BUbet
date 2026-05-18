
import { FastifyInstance } from "fastify"
import { verifyJWT } from "@/middlewares/verify-jwt"
import { getAlbumByEventId } from "./getAlbumByEventId"


export async function albumRoutes (app: FastifyInstance){

    app.addHook('onRequest',verifyJWT)

    app.get('/album/:event_id', getAlbumByEventId )


}
