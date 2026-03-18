import { makeGetGuessEventUseCase } from "@/use-cases/factories/make-get-guess-event-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";


export async function getGuessEvent(req: FastifyRequest, res: FastifyReply){

    const getGuessEventParamsSchema = z.object({
        event_id: z.string().uuid()
    })

    const {event_id} = getGuessEventParamsSchema.parse(req.params)
    
    const getGuessEventUseCase = makeGetGuessEventUseCase()
    const { event } = await getGuessEventUseCase.execute({
        event_id: event_id
    })

    return res.status(200).send(event)
}