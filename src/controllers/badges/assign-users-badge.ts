import { makeAssignUsersBadgeUseCase } from "@/use-cases/factories/make-assign-users-badge-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";



export async function assignUsersBadge(req: FastifyRequest, res: FastifyReply){

    const assignUsersBadgeBodySchema = z.object({
        users: z.array(z.string())
    })
    const assignUsersBadgeParamsSchema = z.object({
        badgeId: z.string().uuid()
    })

    const { users } = assignUsersBadgeBodySchema.parse(req.body)
    const { badgeId } = assignUsersBadgeParamsSchema.parse(req.params)

    const assignUsersBadgeUseCase = makeAssignUsersBadgeUseCase()
    const {  } = await assignUsersBadgeUseCase.execute({
        users,
        badge_id: badgeId
    })

    return res.status(201).send("Ok")
}