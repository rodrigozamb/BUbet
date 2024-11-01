import { UsersRepository } from "@/repositories/users-repository"
import { hash } from "bcryptjs"
import { UserAlreadyExistsError } from "../errors/user-already-exists-error"
import { User } from "@prisma/client"
import { UserNotFoundError } from "../errors/user-not-found-error"

interface UpdateUserUseCaseRequest{
    user_id: string
    name:string  | undefined
    email:string | undefined
    username: string  | undefined
    password: string  | undefined
}

interface UpdateUserUseCaseResponse{
    user: User
}

export class UpdateUserUseCase{

    constructor(
        private usersRepository: UsersRepository, 
    ){}
    
    async execute({email,name,username,password, user_id}:UpdateUserUseCaseRequest): Promise<UpdateUserUseCaseResponse>{

        const userExists = await this.usersRepository.findById(user_id)
        if(!userExists){
            throw new UserNotFoundError()
        }
        var userWithSameEmail
        if(email){

            userWithSameEmail = await this.usersRepository.findByEmail(email)
            if (userWithSameEmail){
                throw new UserAlreadyExistsError()
            }
        }
    
        var password_hash
        if(password){
            password_hash = await hash(password, 6)
        }

        const user = await this.usersRepository.update(user_id,{email,name,password_hash,username})

        return {
            user
        }
    }

}