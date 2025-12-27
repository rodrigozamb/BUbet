import { verifyJWT } from "@/middlewares/verify-jwt";
import { verifyUserRole } from "@/middlewares/verify-user-role";
import { FastifyInstance } from "fastify";
import { sendFinalDeAnoEmail } from "./send-final-de-ano-email";




export async function emailsRoutes (app: FastifyInstance){


    app.addHook('onRequest',verifyJWT)

    app.post('/email/final-de-ano',{onRequest:[verifyUserRole('ADMIN')]}, sendFinalDeAnoEmail )

}