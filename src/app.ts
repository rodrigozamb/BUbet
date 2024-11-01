import fastify from "fastify";
import { userRoutes } from "./controllers/users/routes";
import { competitorRoutes } from "./controllers/competitors/routes";
import { eventRoutes } from "./controllers/events/routes";
import { betsRoutes } from "./controllers/bets/routes";
import fastifyCors from "@fastify/cors";
import fastifyJwt from "@fastify/jwt";
import { env } from "./env";
import fastifyCookie from "@fastify/cookie";
import { ZodError } from "zod";
import { resultsRoutes } from "./controllers/results/routes";
// import multer from 'fastify-multer'
import fastifyMultipart from "@fastify/multipart";

require('aws-sdk/lib/maintenance_mode_message').suppress = true;
export const app = fastify()

app.register(fastifyMultipart)
// app.register(multer.contentParser)

app.register(fastifyCors,{
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Authorization','Content-Type'],
    credentials: true, 

})

app.register(fastifyJwt, {
    secret: env.JWT_SECRET,
    cookie:{
        cookieName: 'bubet.token',
        signed: false
    },
    sign:{
        expiresIn: '10m'
    }
})


app.register(fastifyCookie)
app.register(userRoutes)
app.register(competitorRoutes)
app.register(eventRoutes)
app.register(betsRoutes)
app.register(resultsRoutes)

app.setErrorHandler((error, _, res)=>{

    if (error instanceof ZodError){
        return res
            .status(400)
            .send({
                message: 'Validation Error',
                issues: error.format()
            })
    }
    if (error instanceof Error){
        return res
            .status(400)
            .send({
                message: error.message,
                status: error.statusCode
            })
    }

    if(env.NODE_ENV != 'production'){
        console.log(error)
    }

    return res.status(500).send({message:"Internal Server Error"})
})