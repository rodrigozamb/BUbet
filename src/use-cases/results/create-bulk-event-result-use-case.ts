import { Competitor, EventResults, Prisma, User } from "@prisma/client"
import { EventsResultsRepository } from "@/repositories/event-results-repository"
import { EventResultAlreadyExistsError } from "../errors/event-result-already-exists-error"
import { CompetitorsRepository } from "@/repositories/competitors-repository"
import { EventsRepository } from "@/repositories/events-repository"
import { EventNotFoundError } from "../errors/event-not-found-error"
import { ResourceNotFoundError } from "../errors/resource-not-found-error"

interface CreateBulkEventResulstUseCaseRequest{
    event_id: string,
    result: { 
        id: string, 
        score:number
        banners:{
            id: string
        }[]
    }[]
}

interface CreateBulkEventResultUseCaseResponse{
    results:   EventResults[]
}

export class CreateBulkEventResultUseCase{

    constructor(
        private eventsResultsRepository:EventsResultsRepository,
        private eventsRepository:EventsRepository, 
        private competitorsRepository:CompetitorsRepository, 
    ){}
    
    async execute({result,event_id}:CreateBulkEventResulstUseCaseRequest): Promise<CreateBulkEventResultUseCaseResponse>{

        const eventExits = await this.eventsRepository.findById(event_id)
        if(!eventExits){
            throw new EventNotFoundError()
        }

        const competitors_ids = result.map((res) => {
            return res.id
        })

        const competitorsResult = await this.checkValidCompetitors(competitors_ids)
        
        const validResults = await this.checkValidResult(competitors_ids,event_id)
        
        const data: Prisma.EventResultsUncheckedCreateInput[] = []
        for(let i=0; i < result.length; i++){
            data.push({ 
                eventId: event_id,
                competitorId: result[i].id,
                score: result[i].score,
                placing: (i+1).toString(),
                estandartes:{
                    connect: result[i].banners  
                }
             })
        }

        const results = await this.eventsResultsRepository.bulkCreate(
            data
        )  

        return {
            results
        }
    }

    async checkValidCompetitors(result: string[]){       

        const promises:any = []
        result.forEach((compId)=>{
            promises.push(this.competitorsRepository.findById(compId))
        })
        var validCompetitors = await Promise.all(promises)
        validCompetitors = validCompetitors.filter(n => n)

        if(result.length != validCompetitors.length){
            throw new ResourceNotFoundError()
        }
        
        const res = []
        for (let i = 0; i < validCompetitors.length; i++) { 
            res.push([validCompetitors[i],i+1])
        }
        return res
    }

    async checkValidResult(result: string[], event_id: string){       

        const promises:any = []
        result.forEach((compId)=>{
            promises.push(this.eventsResultsRepository.findById(compId, event_id))
        })
        var validCompetitors = await Promise.all(promises)
        validCompetitors = validCompetitors.filter(n => n)

        if(validCompetitors.length > 0){
            throw new EventResultAlreadyExistsError()
        }
        
        return true
    }

}