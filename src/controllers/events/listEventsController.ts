import { makeListEventsUseCase } from "@/use-cases/factories/make-list-events";
import { FastifyReply, FastifyRequest } from "fastify";


export async function listEvents(req: FastifyRequest, res: FastifyReply){

    const listEventsUseCase = makeListEventsUseCase()
    const { events } = await listEventsUseCase.execute({})

    return res.status(200).send(events)
}