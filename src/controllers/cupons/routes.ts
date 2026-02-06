import { verifyJWT } from "@/middlewares/verify-jwt";
import { FastifyInstance } from "fastify";
import { addNewCupom } from "./addNewCupom";


export async function cuponsRoutes (app: FastifyInstance){

    app.addHook('onRequest',verifyJWT)

    app.post("/cupons", addNewCupom);
}
