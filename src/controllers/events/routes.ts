
import { FastifyInstance } from "fastify"
import { createEvent } from "./createEventController"
import { getEvent } from "./getEventController"
import { addCompetitorToEvent } from "./addCompetitorsToEventController"
import { removeCompetitorToEvent } from "./removeCompetitorsToEventController"
import { listEventCompetitors } from "./listEventCompetitorsController"
import { addBannerTypesToEvent } from './addBannerTypesToEventController'
import { addJudgesToEvent } from './addJudgesToEventController'
import { verifyUserRole } from "@/middlewares/verify-user-role"
import { verifyJWT } from "@/middlewares/verify-jwt"
import { listEventUsersRanking } from "./listEventUsersRankingController"
import { listEvents } from "./listEventsController"
import multer from 'fastify-multer'
import { listEventJudges } from "./listEventJudges"
import { listEventGoldenBanners } from "./listEventGoldenBanners"
import { listEventBannersTypes } from "./listEventBannersTypesController"
import { addEventBanner } from "./addEventBannerController"

const storage = multer.memoryStorage(); // Storing the file in memory before uploading to S3
const upload = multer({ storage });

export async function eventRoutes (app: FastifyInstance){

    app.addHook('onRequest',verifyJWT)

    app.post('/events',{onRequest:[verifyUserRole('ADMIN')], preHandler: upload.single('banner')}, createEvent)

    app.post('/event-banner/:event_id',{onRequest:[verifyUserRole('ADMIN')], preHandler: upload.single('banner')}, addEventBanner)

    app.get('/events', listEvents)
    app.get('/events/:eventId', getEvent)
    app.get('/events/:eventId/competitors',listEventCompetitors)
    app.get('/events/:eventId/judges',listEventJudges)
    app.get('/events/:event_id/estandartes',listEventGoldenBanners)
    app.get('/events/:eventId/ranking',listEventUsersRanking)
    app.get('/events/:eventId/estandartes/types',listEventBannersTypes) 

    app.put('/events/:eventId/addCompetitors',{onRequest:[verifyUserRole('ADMIN')]}, addCompetitorToEvent)
    app.put('/events/:eventId/addBannerTypes',{onRequest:[verifyUserRole('ADMIN')]}, addBannerTypesToEvent)
    app.put('/events/:eventId/addJudges',{onRequest:[verifyUserRole('ADMIN')]}, addJudgesToEvent)
    app.put('/events/:eventId/removeCompetitors',{onRequest:[verifyUserRole('ADMIN')]}, removeCompetitorToEvent)

}
