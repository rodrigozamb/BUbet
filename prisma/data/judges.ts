import { makeAddJudgesToEventUseCase } from "@/use-cases/factories/make-add-judges-to-event-use-case"

export async function addJudgesToEvent(judges: string[], eventId: string){

    const addJudgesToEventUseCase = makeAddJudgesToEventUseCase()
    const { event } = await addJudgesToEventUseCase.execute({
        judges,
        eventId
    })
    return event
}



export const smee = {
    id:"57bb99dc-e991-40d6-bc71-fb7fb02e4dd2",
    first_name:"Fabrizzio",
    last_name:"Ruiz",
    avatar:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/57bb99dc-e991-40d6-bc71-fb7fb02e4dd2",
    description:`Fabrízzio Ruiz, mais conhecido como "Smee", começou sua jornada na Bateria S/A no ano de 2007 e trilhou nela uma jornada de muitos desafios e conquista.\n
                    Eventualmente se tornou jurado de torneios, e atualemte já julgou mais de 100 desafios por todo o brasil.`,
    nickname:"Smee"
}
export const tiao = {
    id:"61fd3f77-bb03-4f98-a6e5-99d45996051a",
    first_name:"Daniel",
    last_name:"Mendonça",
    avatar:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/61fd3f77-bb03-4f98-a6e5-99d45996051a",
    description:"",
    nickname:"Tião"
}
export const buiu = {
    id:"41baab20-e9f0-489e-ac7d-67a125d1597d",
    first_name:"Danilo",
    last_name:"",
    avatar:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/41baab20-e9f0-489e-ac7d-67a125d1597d",
    description:"",
    nickname:"Buiu"
}
export const lukinhas = {
    id:"4d6da340-b216-4c22-946d-957461fcd9be",
    first_name:"Lucas",
    last_name:"Eduardo",
    avatar:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/4d6da340-b216-4c22-946d-957461fcd9be",
    description:"",
    nickname:"Lukinas Eduardo"
}
export const saviani = {
    id:"853aebe9-29a3-4a81-9570-d602b67ba898",
    first_name:"Paulo",
    last_name:"Saviani",
    avatar:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/853aebe9-29a3-4a81-9570-d602b67ba898",
    description:"",
    nickname:"Paulinho Saviani"
}
export const cirilo = {
    id:"bd1a5720-59bf-4a81-90cf-f348e2a5a064",
    first_name:"Gabriel",
    last_name:"Santana",
    avatar:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/bd1a5720-59bf-4a81-90cf-f348e2a5a064",
    description:"",
    nickname:"Cirilo"
}
export const ze_gois = {
    id:"6f033da3-cbcd-42af-9631-ea5551a2e5bd",
    first_name:"José",
    last_name:"Góis",
    avatar:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/6f033da3-cbcd-42af-9631-ea5551a2e5bd",
    description:"",
    nickname:"Zé Góis"
}
export const persa = {
    id:"42ea2c8f-698b-4a7c-b366-f853d9cf286d",
    first_name:"Danilo",
    last_name:"Profitti",
    avatar:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/42ea2c8f-698b-4a7c-b366-f853d9cf286d",
    description:"",
    nickname:"Persa"
}
export const lessa = {
    id:"0e9b1995-101d-4125-921d-2c9f2b83cb2f",
    first_name:"Jonas",
    last_name:"Lessa",
    avatar:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/0e9b1995-101d-4125-921d-2c9f2b83cb2f",
    description:"",
    nickname:"Jonas Lessa"
}
export const feijo = {
    id:"960a9cd7-9c63-4bf0-9257-233f21211695",
    first_name:"André",
    last_name:"Feijó",
    avatar:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/960a9cd7-9c63-4bf0-9257-233f21211695",
    description:"",
    nickname:"Feijó"
}
export const carlitoz = {
    id:"222a2a5e-93c1-4383-adb0-838f2c4d97c0",
    first_name:"Carlos",
    last_name:"Diaz",
    avatar:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/222a2a5e-93c1-4383-adb0-838f2c4d97c0",
    description:"",
    nickname:"Carlitos"
}
export const cego = {
    id:"4948fac1-261a-4c76-bcd7-3921a55b8209",
    first_name:"Victor",
    last_name:"Guimarães Bertoni",
    avatar:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/4948fac1-261a-4c76-bcd7-3921a55b8209",
    description:"",
    nickname:"Cego"
}
export const moleza = {
    id:"96700790-bc76-41c7-98dd-8156fa41a80e",
    first_name:"Rodrigo",
    last_name:"",
    avatar:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/96700790-bc76-41c7-98dd-8156fa41a80e",
    description:"",
    nickname:"Moleza"
}
export const lu_vanini = {
    id:"d6a3a170-7c83-4239-9d91-9d6d3db6c526",
    first_name:"Luiza",
    last_name:"Vanini",
    avatar:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/d6a3a170-7c83-4239-9d91-9d6d3db6c526",
    description:"",
    nickname:"Lu Vanini"
}
export const zoinho = {
    id:"f3a798fd-c8a6-42cb-9854-f8311e2ea952",
    first_name:"Robson",
    last_name:"",
    avatar:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/f3a798fd-c8a6-42cb-9854-f8311e2ea952",
    description:"",
    nickname:"Zoinho"
}
export const tigues = {
    id:"f49b5ad3-3584-4842-816c-d638e732bc05",
    first_name:"Rogério",
    last_name:"Figueira",
    avatar:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/f49b5ad3-3584-4842-816c-d638e732bc05",
    description:"",
    nickname:"Tiguês"
}
export const chilli = {
    id:"5bc85937-7922-4ca9-88cf-b450ddc97609",
    first_name:"Letícia",
    last_name:"",
    avatar:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/5bc85937-7922-4ca9-88cf-b450ddc97609",
    description:"",
    nickname:"Letícia Chilli"
}
export const yan_piscerne = {
    id:"d129a00e-a52f-4320-a6b9-0a793a6f5fd9",
    first_name:"Yan",
    last_name:"Piscerne",
    avatar:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/d129a00e-a52f-4320-a6b9-0a793a6f5fd9",
    description:"",
    nickname:"Yan Piscerne"
}
export const gabs_almeida = {
    id:"dfd1e98f-42bb-46f8-bf09-347ca9dc4076",
    first_name:"Gabriela",
    last_name:"Almeida",
    avatar:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/dfd1e98f-42bb-46f8-bf09-347ca9dc4076",
    description:"",
    nickname:"Gabs Almeida"
}
export const chaique = {
    id:"c564e10c-5867-443e-917e-f6f7ad0e826e",
    first_name:"Caíque",
    last_name:"Rocha",
    avatar:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/c564e10c-5867-443e-917e-f6f7ad0e826e",
    description:"",
    nickname:"Chaíque"
}
export const zedu = {
    id:"5ecffe69-78b1-41db-b11a-cec80b1300e7",
    first_name:"José",
    last_name:"Eduardo",
    avatar:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/5ecffe69-78b1-41db-b11a-cec80b1300e7",
    description:"",
    nickname:"Zedu"
}
export const brisa = {
    id:"51ebea07-637a-41b4-b1d4-1527bd1e0d9e",
    first_name:"Isabela",
    last_name:"Borges",
    avatar:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/51ebea07-637a-41b4-b1d4-1527bd1e0d9e",
    description:"",
    nickname:"Isa Borges"
}
export const tieta = {
    id:"6844cf00-4de0-4c82-895b-7dca2f77bf91",
    first_name:"Marcelo",
    last_name:"Pires",
    avatar:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/6844cf00-4de0-4c82-895b-7dca2f77bf91",
    description:"",
    nickname:"Tieta"
}
export const franci = {
    id:"11222698-de1e-48f1-955c-b4c907192121",
    first_name:"Franci",
    last_name:"Óliver",
    avatar:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/11222698-de1e-48f1-955c-b4c907192121",
    description:"",
    nickname:"Franci Óliver"
}
export const mari_farias = {
    id:"67b06b51-715c-4cc0-b0a8-8a24db9349e7",
    first_name:"Mari",
    last_name:"Farias",
    avatar:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/67b06b51-715c-4cc0-b0a8-8a24db9349e7",
    description:"",
    nickname:"Mari Farias"
}
export const galeazzi = {
    id:"38679e24-8334-4e9a-b0ec-d6cdab7041fc",
    first_name:"Gabriel",
    last_name:"Galeazzi",
    avatar:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/38679e24-8334-4e9a-b0ec-d6cdab7041fc",
    description:"",
    nickname:"Galeazzi"
}