import { makeAddCompetitorsToEventUseCase } from "@/use-cases/factories/make-add-competitors-to-event-use-case";
import { makeCreateBulkEventResultUseCase } from "@/use-cases/factories/make-create-bulk-event-result-use-case";

export async function addCompToEvent(competitors: string[], eventId: string){

    const addCompetitorsToEventUseCase = makeAddCompetitorsToEventUseCase()
    const { event } = await addCompetitorsToEventUseCase.execute({
        competitors,
        eventId
    })
    return event
}

export async function createEventResults(event_id:string, result:{id:string, score: number}[]){     
    const createBulkResultUseCase = makeCreateBulkEventResultUseCase()
    const { insertedCount } = await createBulkResultUseCase.execute({
        event_id,
        result
    })

    return insertedCount
}

export async function giveGoldenBanners(event_id:string, result:{id:string, score: number}[]){     
    const createBulkResultUseCase = makeCreateBulkEventResultUseCase()
    const { insertedCount } = await createBulkResultUseCase.execute({
        event_id,
        result
    })

    return insertedCount
}


export const principal_balatucada_25 = {
    id:"0d059847-9390-4594-abc2-3ed15b21643e",
    banner:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/events/event-0d059847-9390-4594-abc2-3ed15b21643e",
    date: new Date("2024-09-11"),
    description:"O maior evento de baterias do brasil",
    ends_at: new Date("2024-09-11"),
    starts_at: new Date("2024-09-11"),
    local:"Quadra Rosas de Ouro",
    name:"Balatucada Principal 2024",
}

export const seletiva_balatucada_25 = {
    id:"15d4bb9b-beb3-4c98-88b0-1972a1cba75c",
    banner:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/events/event-15d4bb9b-beb3-4c98-88b0-1972a1cba75c",
    date: new Date("2024-06-25"),
    description:"O maior evento de baterias do brasil",
    ends_at: new Date("2024-06-25"),
    starts_at: new Date("2024-06-25"),
    local:"Quadra Império de Casa Verde",
    name:"Balatucada Seletiva 2024"
}

export const cia_2025_3_div = {
    id:"33c8bbb8-7311-4d80-a8ab-4e69837ea6f4",
    banner:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/events/event-33c8bbb8-7311-4d80-a8ab-4e69837ea6f4",
    date: new Date("2025-06-19"),
    description:"3ª Divisão do desafio de Baterias Universitárias da Copa Inter Atléticas",
    ends_at: new Date("2025-06-19"),
    starts_at: new Date("2025-06-19"),
    local:"UTC - Uberaba Tennis Club",
    name:"CIA 2025 - 3ª Divisão"
}

export const cia_2025_2_div = {
    id:"00e9fe3a-e3f3-43a1-810b-0560acbe19c3",
    banner:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/events/event-00e9fe3a-e3f3-43a1-810b-0560acbe19c3",
    date: new Date("2025-06-20"),
    description:"2ª Divisão do desafio de Baterias Universitárias da Copa Inter Atléticas",
    ends_at: new Date("2025-06-20"),
    starts_at: new Date("2025-06-20"),
    local:"UTC - Uberaba Tennis Club",
    name:"CIA 2025 - 2ª Divisão"
}

export const cia_2025_1_div = {
    id:"1f8b8220-8e07-4893-90f1-e3394a24a35a",
    banner:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/events/event-1f8b8220-8e07-4893-90f1-e3394a24a35a",
    date: new Date("2025-06-21"),
    description:"1ª Divisão do desafio de Baterias Universitárias da Copa Inter Atléticas",
    ends_at: new Date("2025-06-21"),
    starts_at: new Date("2025-06-21"),
    local:"UTC - Uberaba Tennis Club",
    name:"CIA 2025 - 1ª Divisão"
}

export const pre_seletiva_balatucada_25 = {
    id:"72f8c4d8-f90f-42ca-a494-38734bcd4d21",
    banner:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/events/event-72f8c4d8-f90f-42ca-a494-38734bcd4d21",
    date: new Date("2024-05-18"),
    description:"O maior evento de baterias do brasil",
    ends_at: new Date("2024-05-18"),
    starts_at: new Date("2024-05-18"),
    local:"Quadra Unidos da Peruche",
    name:"Balatucada Pré Seletiva 2024"
}

export const unigames_25 = {
    id:"d00bf451-64e7-42f0-a3bc-90135ec05e2b",
    banner:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/events/event-d00bf451-64e7-42f0-a3bc-90135ec05e2b",
    date: new Date("2024-09-11"),
    description:"unigames",
    ends_at: new Date("2024-09-11"),
    starts_at: new Date("2024-09-11"),
    local:"Quadra Camisa Verde e Branco",
    name:"Unigames 2025"
}

export const o_maior_inter_25 = {
    id:"abda48b2-7984-4373-aff2-2ff45024f31d",
    banner:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/events/event-abda48b2-7984-4373-aff2-2ff45024f31d",
    date: new Date("2025-06-18"),
    description:"O desafio de baterias do maior Inter do Brasil",
    ends_at: new Date("2025-06-18"),
    starts_at: new Date("2025-06-18"),
    local:"Goiania - GO",
    name:"O Maior Inter"
}

export const engenhariadas_pr_25 = {
    id:"ee3a36d7-2562-4aaf-b3f7-bff908876291",
    banner:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/events/event-ee3a36d7-2562-4aaf-b3f7-bff908876291",
    date: new Date("2025-06-21"),
    description:"O desafio de baterias do Engenharíadas PR 2025",
    ends_at: new Date("2025-06-21"),
    starts_at: new Date("2025-06-21"),
    local:"Maringá - PR",
    name:"Engenharíadas Paranaense 2025"
}
