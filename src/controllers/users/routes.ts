import { FastifyInstance } from "fastify"
import { createUser } from "./createUserController"
import { getUser } from "./getUserController"
import { authenticate } from "./authenticateController"
import { verifyJWT } from "@/middlewares/verify-jwt"
import { refresh } from "./refreshController"
import { updateUser } from "./updateUserController"
import { deleteUser } from "./deleteUserController"
import { confirmEmail } from "./confirmEmailController"
import multer from 'fastify-multer'

const storage = multer.memoryStorage(); // Storing the file in memory before uploading to S3
const upload = multer({ storage });

export async function userRoutes (app: FastifyInstance){


    app.post('/users',{ preHandler: upload.single('profile') }, createUser)
    app.get('/confirmation/:user_id', confirmEmail)
    app.post('/login',authenticate)
    app.patch('/token/refresh', refresh)

    /** Authenticated **/
    app.get('/users/profile', {onRequest:[verifyJWT]} ,getUser)
    app.put('/users/profile', {onRequest:[verifyJWT]} , updateUser)
    app.delete('/users/profile', {onRequest:[verifyJWT]} , deleteUser)
    

}
