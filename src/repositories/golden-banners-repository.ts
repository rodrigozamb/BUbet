import { GoldenBanner } from "@prisma/client";

export interface GoldenBannersRepository{
    findByEvent(event_id: string): Promise<GoldenBanner[]>
    findByCompetitor(competitor_id: string): Promise<GoldenBanner[]>
}