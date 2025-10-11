import { User, Prisma, Bets } from "@prisma/client";
import { UsersRepository } from "../users-repository";
import { prisma } from "@/lib/prisma";

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
        const user = prisma.user.findUnique({
            where:{id},
            include:{
                bets: true
            }
        }) 
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