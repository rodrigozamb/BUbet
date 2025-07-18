import { makeCreateEventUseCase } from "@/use-cases/factories/make-create-event-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";



export async function createEvent(req: FastifyRequest, res: FastifyReply){

    const createEventBodySchema = z.object({
        name: z.string().min(5).max(50),
        description: z.string().min(5).max(150),
        date: z.string(),
        local: z.string().optional(),
        starts_at: z.string(),
        ends_at: z.string(),
        banner: z.string().optional(),
        judges: z.array( z.object({id: z.string().uuid() }) ).optional().default([]),
        competitors: z.array( z.object({id: z.string().uuid() }) ).optional().default([]),
        event_banner_types: z.array( z.object({id: z.string().uuid() }) ).optional().default([]),
    })
    const {date,description,ends_at,judges,name,starts_at, local, banner, competitors, event_banner_types} = createEventBodySchema.parse(req.body)
    
    const createEventUseCase = makeCreateEventUseCase()
    const { event } = await createEventUseCase.execute({
        date: new Date(date),
        description,
        ends_at: new Date(ends_at),
        name,
        starts_at: new Date(starts_at),
        local: local ? local : "Não definido",
        banner: banner ? banner : "Não definido",
        judges,
        competitors,
        event_banner_types
    })

    return res.status(201).send(event)
}