import { CuponsRepository } from "@/repositories/cupons-repository"
import { prizes } from "@/utils/spin"
import { UserMustWaitCupomTimeoutError } from "../errors/user-must-wait-cupom-timeout-error"

interface AddCupomToUserUseCaseRequest{
    competitor_id: string
}

interface AddCupomToUserUseCaseResponse{
    prize: number
    angle: number
}

export class addCupomToUserUseCase{

    constructor(
        private cuponsRepository: CuponsRepository, 
    ){}
    
    async execute({ competitor_id }:AddCupomToUserUseCaseRequest): Promise<AddCupomToUserUseCaseResponse>{

        const isUserValid = await this.cuponsRepository.checkUserLastCupom(competitor_id);

        if(!isUserValid){
            throw new UserMustWaitCupomTimeoutError()
        }

        const sliceAngle = 360 / prizes.length;

        // Pick prize
        const index = Math.floor(Math.random() * prizes.length);
        const prize = prizes[index];

        // ✅ Correct center math
        const centerAngle = 360 - index * sliceAngle - sliceAngle / 2;

        // Visual drama only
        const extraSpins = 360 * (6 + Math.floor(Math.random() * 3));
        const finalAngle = extraSpins + centerAngle;

        await this.cuponsRepository.addCupomToUser({value: prize, userId: competitor_id,  })

        return {
            prize,
            angle: finalAngle+Math.floor(Math.random() * 43) + 1.5,
        };


    }

}