import { verifyJWT } from "@/middlewares/verify-jwt";
import { verifyUserRole } from "@/middlewares/verify-user-role";
import { FastifyInstance } from "fastify";
import { createSeason } from "./createSeason";
import { getSeason } from "./getSeason";

export async function seasonRoutes (app: FastifyInstance){
    app.addHook('onRequest',verifyJWT)

    app.post('/temporada/create',{onRequest:[verifyUserRole('ADMIN')]}, createSeason)
    app.get('/temporada/:season_id', getSeason)
    
}   