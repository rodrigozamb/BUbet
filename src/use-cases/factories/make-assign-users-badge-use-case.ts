import { PrismaBadgesRepository } from "@/repositories/prisma/prisma-badges-repository";
import { AssignUsersBadgeUseCase } from "../badges/assign-users-badge-use-case";


export function makeAssignUsersBadgeUseCase(){
    const badgeRepository = new PrismaBadgesRepository()
    
    const assignUsersBageUseCase = new AssignUsersBadgeUseCase(badgeRepository)

    return assignUsersBageUseCase
}