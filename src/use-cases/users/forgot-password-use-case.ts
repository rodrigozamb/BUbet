import { UsersRepository } from "@/repositories/users-repository";
import { UserNotFoundError } from "../errors/user-not-found-error";
import { sign } from 'jsonwebtoken'
import { env } from "@/env"
import { resend_sendForgetPassword } from "@/utils/sendMail";
interface forgotPasswordUseCaseRequest{
    email:string
}

interface  forgotPasswordUseCaseResponse{

}


export class ForgotPasswordUseCase{

    constructor(
        private usersRepository: UsersRepository
    ){}

    async execute({email}:forgotPasswordUseCaseRequest): Promise<forgotPasswordUseCaseResponse>{
        
        const user = await this.usersRepository.findByEmail(email)
        if(!user){
            throw new UserNotFoundError()
        }
        if(!user.is_confirmed){
            throw new Error("User not active")
        }
        const token = sign(
            {
                "user_id": user.id,
                "email": email
            },
            env.FORGET_PASSWORD_SECRET,
            {
                expiresIn: '30M'
            }
        );

        await resend_sendForgetPassword(user.email, token)
        return {
        }
    }
}