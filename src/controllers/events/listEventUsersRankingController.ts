import { makeListEventCompetitorsUseCase } from "@/use-cases/factories/make-list-event-competitors-use-case";
import { makeListEventUsersRankingUseCase } from "@/use-cases/factories/make-list-event-users-ranking-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";


export async function listEventUsersRanking(req: FastifyRequest, res: FastifyReply){

    const listEventUsersRankingParamsSchema = z.object({
        eventId: z.string().uuid()
    })

    const {eventId} = listEventUsersRankingParamsSchema.parse(req.params)
    const listEventUsersRankingUseCase = makeListEventUsersRankingUseCase()
    const { bets } = await listEventUsersRankingUseCase.execute({
        event_id: eventId
    })

    return res.status(200).send(bets)
}