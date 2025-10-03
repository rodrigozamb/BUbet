import { UsersRepository } from "@/repositories/users-repository";
import { compare } from "bcryptjs";
import { User } from "@prisma/client";
import { InvalidCredentialsError } from "@/use-cases/errors/invalid-credentials-error";
import { UserNotFoundError } from "../errors/user-not-found-error";
import { EmailNotConfirmedError } from "../errors/email-not-confirmed-error";

interface UserAuthenticateUseCaseRequest{
    email:string
    password:string
}

interface  UserAuthenticateUseCaseResponse{
    user: User
}


export class UserAuthenticateUseCase{

    constructor(
        private usersRepository: UsersRepository
    ){}

    async execute({email,password}:UserAuthenticateUseCaseRequest): Promise<UserAuthenticateUseCaseResponse>{
        const user = await this.usersRepository.findByEmail(email)

        if(!user){
            throw new InvalidCredentialsError()
        }

        if(!user.is_confirmed){
            throw new EmailNotConfirmedError()
        }

        const doesPasswordMatches = await compare(password, user.password_hash)

        if(!doesPasswordMatches){
            throw new InvalidCredentialsError()
        }
        await this.usersRepository.update_last_activity(user.id)
        return {
            user
        }
    }
}