import { verifyJWT } from "@/middlewares/verify-jwt";
import { verifyUserRole } from "@/middlewares/verify-user-role";
import { FastifyInstance } from "fastify";
import { assignUsersBadge } from "./assign-users-badge";




export async function bagdesRoutes (app: FastifyInstance){


    app.addHook('onRequest',verifyJWT)

    app.post('/badges/:badgeId',{onRequest:[verifyUserRole('ADMIN')]}, assignUsersBadge )

}