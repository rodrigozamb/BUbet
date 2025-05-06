
import { FastifyInstance } from "fastify"
import { createCompetitor } from "./createCompetitorController"
import { getCompetitor } from "./getCompetitorController"
import { listCompetitor } from "./listCompetitorsController"
import { updateCompetitor } from "./updateCompetitorController"
import { getCompetitorStatistics } from "./getCompetitorStatisticsController"
import { verifyUserRole } from "@/middlewares/verify-user-role"
import { verifyJWT } from "@/middlewares/verify-jwt"
import multer from 'fastify-multer'
import { listCompetitorGoldenBanners } from "./listCompetitorGoldenBanners"

const storage = multer.memoryStorage(); // Storing the file in memory before uploading to S3
const upload = multer({ storage });

export async function competitorRoutes (app: FastifyInstance){

    app.addHook('onRequest',verifyJWT)

    app.post('/competitors',{onRequest:[verifyUserRole('ADMIN')], preHandler:upload.single('logo') }, createCompetitor)

    app.get('/competitors/:competitorId', getCompetitor)
    app.get('/competitors/:competitor_id/estandartes', listCompetitorGoldenBanners)
    app.get('/competitors', listCompetitor)
    
    
    app.put('/competitors',{onRequest:[verifyUserRole('ADMIN')]}, updateCompetitor)
    app.get('/competitors/stats/:competitorId',getCompetitorStatistics)


}
