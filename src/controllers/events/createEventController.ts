import { makeCreateEventUseCase } from "@/use-cases/factories/make-create-event-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";



export async function createEvent(req: FastifyRequest, res: FastifyReply){

    const createEventBodySchema = z.object({
        name: z.string().min(5).max(50),
        description: z.string().min(5).max(150),
        date: z.string(),
        judges: z.string(),
        starts_at: z.string(),
        ends_at: z.string()
    })
    const {date,description,ends_at,judges,name,starts_at} = createEventBodySchema.parse(req.body)
    const banner = req.file
    
    const createEventUseCase = makeCreateEventUseCase()
    const { event } = await createEventUseCase.execute({
        date: new Date(date),
        description,
        ends_at: new Date(ends_at),
        judges: judges.split(","),
        name,
        starts_at: new Date(starts_at),
        banner
    })

    return res.status(201).send()
}