import { verifyJWT } from "@/middlewares/verify-jwt";
import { FastifyInstance } from "fastify";
import { addAlbumPackToUser } from "./addAlbumPackToUser";
import { getUserAlbumPacks } from "./getUserAlbumPacks";
import { listAllUserAlbumPacks } from "./listAllUserAlbumPacks";
import { listAlbumCardsByAlbumId } from "./listAlbumCardsByAlbumId";
import { listAllAlbumsCards } from "./listAllAlbumsCards";

export async function userAlbumPackRoutes (app: FastifyInstance){
    app.addHook('onRequest',verifyJWT)

    app.post('/cards/:pack_id/buy', addAlbumPackToUser)
    app.get('/cards/:pack_id', getUserAlbumPacks)
    app.get('/cards/collection', listAllUserAlbumPacks)
    app.get('/cards/album', listAllAlbumsCards)
    app.get('/cards/album/:album_id', listAlbumCardsByAlbumId)
}