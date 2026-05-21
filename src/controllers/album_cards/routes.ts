
import { FastifyInstance } from "fastify"
import { verifyJWT } from "@/middlewares/verify-jwt"
import { openCardPack } from "./openCardPack"
import { createTrade } from "./createTrade"
import { listTrades } from "./listTrades"
import { acceptTrade } from "./acceptTrade"
import { deleteTrade } from "./deleteTrade"



export async function albumPacksRoutes (app: FastifyInstance){

    app.addHook('onRequest',verifyJWT)

    app.post('/cards/:pack_id/open', openCardPack )

    app.post('/cards/trades',createTrade )
    app.get('/cards/trades',listTrades )
    app.post('/cards/trades/:trade_id/accept',acceptTrade )
    app.delete('/cards/trades/:trade_id',deleteTrade )

}
