import { makeAddCupomToUserUseCase } from "@/use-cases/factories/make-add-new-cupom-to-user-user-case";
import { FastifyReply, FastifyRequest } from "fastify";

export async function addNewCupom(req: FastifyRequest, res: FastifyReply){
    
    const addNewCupomUseCase = makeAddCupomToUserUseCase()
    const { angle, prize } = await addNewCupomUseCase.execute({
        competitor_id: req.user.sub
    })

    return res.status(201).send({prize, angle})
}