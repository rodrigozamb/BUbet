import { makeListEventCompetitorsUseCase } from "@/use-cases/factories/make-list-event-competitors-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";


export async function listEventCompetitors(req: FastifyRequest, res: FastifyReply){

    const listEventCompetitorsParamsSchema = z.object({
        eventId: z.string().uuid()
    })

    const {eventId} = listEventCompetitorsParamsSchema.parse(req.params)
    const listEventCompetitorsUseCase = makeListEventCompetitorsUseCase()
    const { competitors } = await listEventCompetitorsUseCase.execute({
        event_id: eventId
    })

    return res.status(200).send(competitors)
}