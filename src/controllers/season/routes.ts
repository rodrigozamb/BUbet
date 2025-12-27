import { verifyJWT } from "@/middlewares/verify-jwt";
import { verifyUserRole } from "@/middlewares/verify-user-role";
import { FastifyInstance } from "fastify";
import { createSeason } from "./createSeason";
import { getSeason } from "./getSeason";
import { getAllSeasons } from "./getAllSeasons";

export async function seasonRoutes (app: FastifyInstance){
    app.addHook('onRequest',verifyJWT)

    app.post('/temporadas/create',{onRequest:[verifyUserRole('ADMIN')]}, createSeason)
    app.get('/temporadas/:season_id', getSeason)
    app.get('/temporadas', getAllSeasons)
    
}   