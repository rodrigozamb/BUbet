import { FastifyInstance } from "fastify"
import { createUser } from "./createUserController"
import { getSelfUser } from "./getSelfUserController"
import { authenticate } from "./authenticateController"
import { verifyJWT } from "@/middlewares/verify-jwt"
import { refresh } from "./refreshController"
import { updateUser } from "./updateUserController"
import { deleteUser } from "./deleteUserController"
import { confirmEmail } from "./confirmEmailController"
import multer from 'fastify-multer'
import { getUser } from "./getUserController"
import { listUsersByRank } from "./listUsersByRankController"
import { updateUserPassword } from "./redefinePasswordController"
import { forgetPasswordController } from "./forgetPasswordController"

const storage = multer.memoryStorage(); // Storing the file in memory before uploading to S3
const upload = multer({ storage });

export async function userRoutes (app: FastifyInstance){


    app.post('/users',{ preHandler: upload.single('profile') }, createUser)
    app.get('/confirmation/:user_id', confirmEmail)
    app.post('/login',authenticate)
    app.post('/forget',forgetPasswordController)
    app.post('/redefine',updateUserPassword)
    app.patch('/token/refresh', refresh)

    /** Authenticated **/
    app.get('/users/ranking',{onRequest:[verifyJWT]}, listUsersByRank)
    app.get('/users/profile', {onRequest:[verifyJWT]} ,getSelfUser)
    app.get('/users/profile/:user_id', {onRequest:[verifyJWT]} ,getUser)
    app.put('/users/profile', { preHandler: upload.single('profile') , onRequest:[verifyJWT] } , updateUser)
    app.delete('/users/profile', {onRequest:[verifyJWT]} , deleteUser)
    

}
