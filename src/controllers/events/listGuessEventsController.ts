
import { makeListGuessEventsUseCase } from "@/use-cases/factories/make-list-guess-events-user-case";
import { FastifyReply, FastifyRequest } from "fastify";


export async function listGuessEvents(req: FastifyRequest, res: FastifyReply){

    const listGuessEventsUseCase = makeListGuessEventsUseCase()
    const { events } = await listGuessEventsUseCase.execute({})

    return res.status(200).send(events)
}