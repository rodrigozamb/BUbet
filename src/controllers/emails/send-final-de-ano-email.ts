import { resend_FinalDeAnoEmail } from "@/utils/sendMail";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";



export async function sendFinalDeAnoEmail(req: FastifyRequest, res: FastifyReply){

    const sendFinalDeAnoEmailBodySchema = z.object({
        users: z.array(z.string())
    })

    const { users } = sendFinalDeAnoEmailBodySchema.parse(req.body)

    const promises:any = []
    users.forEach((user_email)=>{
        promises.push( resend_FinalDeAnoEmail(user_email) )
    })
    var validBannerTypes = await Promise.all(promises)
    validBannerTypes = validBannerTypes.filter(n => n)


    return res.status(201).send(validBannerTypes)
}