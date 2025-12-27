import { makeGetAllSeasonsUseCase } from "@/use-cases/factories/make-get-all-seasons-use-case";
import { FastifyReply, FastifyRequest } from "fastify";

export async function getAllSeasons(req: FastifyRequest, res: FastifyReply){

    const getAllSeasonsUseCase = makeGetAllSeasonsUseCase()
    const { seasons } = await getAllSeasonsUseCase.execute()

    return res.status(201).send(seasons)
}