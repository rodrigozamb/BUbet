import { makeFindJudgeUseCase } from "@/use-cases/factories/make-find-judge-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function findJudge(req: FastifyRequest, res: FastifyReply){

    const findJudgeParamsSchema = z.object({
        judge_id: z.string().uuid()
    })

    const {judge_id } = findJudgeParamsSchema.parse(req.params)
    
    const findJudgeUseCase = makeFindJudgeUseCase()
    const { judge } = await findJudgeUseCase.execute({judge_id})

    return res.status(201).send(judge)
}