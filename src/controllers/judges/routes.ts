
import { FastifyInstance } from "fastify"
import { verifyJWT } from "@/middlewares/verify-jwt"
import { findJudge } from "./findJudge"
import { findAllJudges } from "./findAllJudges"


export async function judgesRoutes (app: FastifyInstance){

    app.addHook('onRequest',verifyJWT)

    app.get('/judges', findAllJudges)
    app.get('/judges/:judge_id', findJudge)

}
