import { makeGetPackByIdUseCase } from "@/use-cases/factories/make-get-pack-by-id-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function getPackById(req: FastifyRequest, res: FastifyReply){
    
    const getPackByIdParamSchema = z.object({
        pack_id: z.string().uuid(),
    })

    const { pack_id } = getPackByIdParamSchema.parse(req.params)
    const getPackByIdUseCase = makeGetPackByIdUseCase()
    const { pack } = await getPackByIdUseCase.execute({ pack_id })
    
    return res.status(200).send(pack)
}