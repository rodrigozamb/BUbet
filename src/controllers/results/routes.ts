import { FastifyInstance } from "fastify"
import { createResult } from "./createResults"
import { createBulkResult } from "./createBulkResults"
import { listEventResults } from "./listEventResults"
import { applyPoints } from "./applyPoints"
import { verifyUserRole } from "@/middlewares/verify-user-role"
import { verifyJWT } from "@/middlewares/verify-jwt"

export async function resultsRoutes (app: FastifyInstance){

    app.addHook('onRequest',verifyJWT)


    app.post('/results',{onRequest:[verifyUserRole('ADMIN')]}, createResult)
    app.post('/results/all',{onRequest:[verifyUserRole('ADMIN')]},createBulkResult)
    app.get('/results/:event_id',listEventResults)
    app.post('/admin/applypoints',{onRequest:[verifyUserRole('ADMIN')]},applyPoints)

}
