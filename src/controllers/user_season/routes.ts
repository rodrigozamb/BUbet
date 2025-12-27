import { verifyJWT } from "@/middlewares/verify-jwt";
import { verifyUserRole } from "@/middlewares/verify-user-role";
import { FastifyInstance } from "fastify";
import { createUserSeason } from "./createUserSeason";
import { listUserSeason } from "./listUserSeasons";
import { listSeasonResults } from "./listSeasonResults";

export async function userSeasonRoutes (app: FastifyInstance){
    app.addHook('onRequest',verifyJWT)

    app.post('/seasons/create',{onRequest:[verifyUserRole('ADMIN')]}, createUserSeason)
    app.get('/seasons/users/:user_id', listUserSeason)
    app.get('/seasons/:season_id', listSeasonResults)
    
}