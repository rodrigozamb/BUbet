import { User, Prisma, Bets } from "@prisma/client";
import { UsersRepository } from "../users-repository";
import { prisma } from "@/lib/prisma";
import { hash } from "bcryptjs";

export class PrismaUsersRepository implements UsersRepository{
    
    
    async confirmEmail(user_id: string): Promise<void> {
        await prisma.user.update({
            where:{
                id: user_id,
                is_confirmed:{
                    equals: null
                }
            },
            data:{
                is_confirmed: new Date()
            }
        })
    }
    
    async update_password(user_id: string, new_password: string): Promise<User> {

        const password_hash = await hash(new_password, 6)
        return await prisma.user.update({
            where:{
                id: user_id,
                is_confirmed:{
                    equals: null
                }
            },
            data:{
                password_hash: password_hash
            }
        })
    }

    async listUsersByRank():Promise<{}[]>{
        const pointed_ranks =  await prisma.user.findMany({
            where:{
                position:{
                    gt: 0
                }
            },
            orderBy:{
                position:"asc"
            },
            select:{
                position:true,
                name: true,
                profile_url:true,
                id:true,
                username:true,
                points: true
            }

        })

        const zero_ranks =  await prisma.user.findMany({
            where:{
                position: 0
            },
            select:{
                position:true,
                name: true,
                profile_url:true,
                id:true,
                username:true,
                points: true
            }
        })

        return pointed_ranks.concat(zero_ranks)
    }
    
    async update(user_id: string, data: Prisma.UserUpdateInput): Promise<User> {
        return await prisma.user.update({
            data,
            where:{
                id: user_id
            }
        }) 
    }

    async delete(user_id: string): Promise<User> {
        return await prisma.user.delete({
            where:{id:user_id}
        })
    }

    async findById(id: string): Promise<User | null> {
        let user = await prisma.user.findUnique({
            where:{id},
            include:{
                badges: true,
                bets: true,
                favorite_competitor: true
            }
        })
        if(user){
            user.badges.sort((a,b) => new Date(b.created_at).valueOf() - new Date(a.created_at).valueOf() )
        }
        return user
    }

    async findSelfById(id: string): Promise<User | null> {
        let user = await prisma.user.findUnique({
            where:{id},
            include:{
                badges: true,
                bets: true,
                notifications: {
                    where:{
                        is_visualized: null
                    },
                    select:{
                        notification: true,
                        id:true
                    }
                },
                favorite_competitor:true
            }
        })
        if(user){
            user.badges.sort((a,b) => new Date(b.created_at).valueOf() - new Date(a.created_at).valueOf() )
        }
        return user
    }

    async findByEmail(email: string): Promise<User | null> {
        return prisma.user.findUnique({
            where:{email}
        }) 
    }
    async create(data: Prisma.UserCreateInput): Promise<User> {
        return prisma.user.create({
            data
        }) 
    }

    async update_last_activity(user_id: string): Promise<void>{
        await prisma.user.update({
            where:{
                id: user_id
            },
            data:{
                last_activity: new Date()
            }
        }) 
    }

}