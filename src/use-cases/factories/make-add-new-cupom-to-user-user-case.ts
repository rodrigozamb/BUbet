import { addCupomToUserUseCase } from "../cupons/add-cupom-to-user-use-case";
import { PrismaCuponsRepository } from "@/repositories/prisma/prisma-cupons-repository";


export function makeAddCupomToUserUseCase(){
    
    const cupomRepository = new PrismaCuponsRepository()
    
    const addJudgeToEventUseCase = new addCupomToUserUseCase(cupomRepository)

    return addJudgeToEventUseCase
}