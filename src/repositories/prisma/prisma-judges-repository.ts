import { Judge} from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { JudgesRepository } from "../judges-repository";

export class PrismaJudgesRepository implements JudgesRepository{
    async findById(judge_id: string): Promise<Judge | null> {
        return await prisma.judge.findUnique({
            where:{
                id: judge_id
            }
        })
    }

    async listEventJudges(event_id: string): Promise<Judge[]>{
        const res =  await prisma.event.findUnique({
            where:{
                id: event_id
            },
            include:{
                judges: true
            }
        })

        if (!res){
            return []
        }

        return res.judges
    }
 

}