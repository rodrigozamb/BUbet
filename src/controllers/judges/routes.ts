
import { FastifyInstance } from "fastify"
import { verifyJWT } from "@/middlewares/verify-jwt"
import { findJudge } from "./findJudge"


export async function judgesRoutes (app: FastifyInstance){

    app.addHook('onRequest',verifyJWT)

    app.get('/judges/:judge_id', findJudge)

}
