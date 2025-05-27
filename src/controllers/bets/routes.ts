

import { FastifyInstance } from "fastify"
import { createBet } from "./create-bet-controller"
import { getBet } from "./get-bet-controller"
import { listSelfBets } from "./list-self-bets-controller"
import { verifyJWT } from "@/middlewares/verify-jwt"
import { listEventBets } from "./list-event-bets-controller"
import { listUserBets } from "./list-user-bets-controller"

export async function betsRoutes (app: FastifyInstance){


    app.addHook('onRequest',verifyJWT)

    app.get('/bets', listSelfBets)
    app.get('/bets/user/:user_id', listUserBets)
    app.post('/bets/:event_id', createBet)
    app.get('/bets/:event_id', listEventBets)
    app.get('/bets/:event_id/me', getBet)

}
