import { Prisma, User } from "@prisma/client";

export interface UsersRepository{
    findById(id:string) : Promise<User | null>
    findByEmail(email:string) : Promise<User | null>
    create(data: Prisma.UserCreateInput):Promise<User>
    update(user_id: string, data: Prisma.UserUpdateInput): Promise<User>
    delete(user_id: string): Promise<User>
    confirmEmail(user_id: string):Promise<void>
    update_last_activity(user_id: string): Promise<void>
}