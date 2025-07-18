import { makeListAllBannerTypesUseCase } from "@/use-cases/factories/make-list-all-banner-types-use-case";
import { FastifyReply, FastifyRequest } from "fastify";

export async function ListAllEstandartes(req:FastifyRequest, res: FastifyReply){

    const listAllBannerTypesUseCase = makeListAllBannerTypesUseCase()
    const { estandartes } = await listAllBannerTypesUseCase.execute()

    return res.status(201).send(estandartes)
}
