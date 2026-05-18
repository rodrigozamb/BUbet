import { Album, UserAlbumCards } from "@prisma/client";
import { AlbumsRepository } from "../albums-repository";
import { prisma } from "@/lib/prisma";

export class PrismaAlbumsRepository implements AlbumsRepository{
    
    async getAlbumByPackId(pack_id: string): Promise<Album> {
        const album =  await prisma.album.findFirst({
            where:{
                cardPacks:{
                    some:{
                        id: pack_id
                    }
                }
            }
        })

        if(!album){
            throw new Error("Album not found")
        }

        return album
    }
    
    async getAlbumByEventId(event_id: string, user_id: string): Promise<{ album: Album; cards: UserAlbumCards[]; }> {
        const userAlbum = await prisma.album.findFirst({
            where:{
                event_id
            },
            include:{
                pages:{
                    include:{
                        cards: true
                    }
                },
                event:{
                    select:{
                        id:true,
                        name:true
                    }
                }
            }
        })
        if(!userAlbum){
            throw new Error("Album not found")
        }

        const userAlbumCards = await prisma.userAlbumCards.findMany({
            where:{
                user_id,
            },
            include:{
                album_card:{
                    select:{
                        imageUrl: true,
                        name: true,
                        naipe:true,
                    }
                }
            }
        })
        
        return {
            album: userAlbum,
            cards: userAlbumCards
        }
    }


}