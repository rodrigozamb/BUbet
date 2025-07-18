import { EventsRepository } from "@/repositories/events-repository"
import { Event } from "@prisma/client"
import { EventAlreadyExistsError } from "../errors/event-already-exists-error"

interface CreateEventUseCaseRequest{
    name:string
    description:string
    date: Date
    local: string
    starts_at: Date
    ends_at: Date,
    banner?: any,
    
    competitors?:{id:string}[],
    event_banner_types?:{id:string}[]
    judges?: {
        id: string
    }[]
}

interface CreateEventUseCaseResponse{
    event: Event
}

export class CreateEventUseCase{

    constructor(
        private eventsRepository: EventsRepository, 
    ){}
    
    async execute({date,description,ends_at,local,name,starts_at, banner, competitors,event_banner_types,judges = []}:CreateEventUseCaseRequest): Promise<CreateEventUseCaseResponse>{

        const eventWithSameName = await this.eventsRepository.findByName(name)
    
        if(eventWithSameName){
            throw new EventAlreadyExistsError()
        }
        
        const judgesToAdd = judges?.map((j) => j)
        const competitorsToAdd = competitors?.map((j) => j)
        const event_banner_typesToAdd = event_banner_types?.map((j) => j)
        const event = await this.eventsRepository.create({
            date,
            description,
            ends_at,
            name,
            starts_at,
            local,
            banner,
            judges: {
                connect: judgesToAdd
            },
            competitors: {
                connect: competitorsToAdd
            },
            event_banner_types: {
                connect: event_banner_typesToAdd
            }
        
        
        
        })

        return {
            event
        }
    }

}