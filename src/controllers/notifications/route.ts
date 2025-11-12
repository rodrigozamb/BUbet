import { verifyJWT } from "@/middlewares/verify-jwt";
import { FastifyInstance } from "fastify";
import { createNotification } from "./createNotificationController";
import { emitNotification } from "./emitNotificationController";
import { visualizeNotification } from "./visualizeNotificationController";
import { listUserNotification } from "./listUserNotificationsController";
import { verifyUserRole } from "@/middlewares/verify-user-role";

export async function notificationRoutes (app: FastifyInstance){


    app.addHook('onRequest',verifyJWT)
    app.get('/notifications', listUserNotification)
    app.put('/notifications/:notification_id', visualizeNotification)

    app.post('/notifications',{onRequest:[verifyUserRole('ADMIN')]} , createNotification)
    app.post('/notifications/emit', {onRequest:[verifyUserRole('ADMIN')]} , emitNotification)
}