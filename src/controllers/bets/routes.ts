

import { FastifyInstance } from "fastify"
import { createBet } from "./create-bet-controller"
import { getBet } from "./get-bet-controller"
import { listUserBets } from "./list-user-bets-controller"
import { verifyJWT } from "@/middlewares/verify-jwt"

export async function betsRoutes (app: FastifyInstance){


    app.addHook('onRequest',verifyJWT)

    app.get('/bets', listUserBets)
    app.post('/bets/:event_id', createBet)
    app.get('/bets/:event_id', getBet)

}
