
import { FastifyInstance } from "fastify"
import { verifyJWT } from "@/middlewares/verify-jwt"
import multer from "fastify-multer";
import { createFeedback } from "./createFeedback";
import { verifyUserRole } from "@/middlewares/verify-user-role";
import { listFeedBacks } from "./listFeedbacks";

const storage = multer.memoryStorage(); // Storing the file in memory before uploading to S3
const upload = multer({ storage });

export async function feedbacksRoutes (app: FastifyInstance){

    app.addHook('onRequest',verifyJWT)

    app.post('/feedbacks',{ preHandler: upload.single('image') }, createFeedback)
    app.get('/feedbacks/:verified',{onRequest:[verifyUserRole('ADMIN')]}, listFeedBacks)
        
}
