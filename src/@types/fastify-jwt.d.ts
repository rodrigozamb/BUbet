import fastify from "fastify";

declare module '@fastify/jwt'{
    export interface FastifyJWT{
        user:{
            sub:string
            role: 'USER' | 'ADMIN'
            name: string,
            profile: string
        }
    }
}