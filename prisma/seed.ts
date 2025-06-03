import { prisma } from "@/lib/prisma"



async function seed(){

    /* JURADOS */
    await prisma.judge.createMany({data:[
        {
            id:"57bb99dc-e991-40d6-bc71-fb7fb02e4dd2",
            first_name:"Fabrizzio",
            last_name:"Ruiz",
            avatar:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/57bb99dc-e991-40d6-bc71-fb7fb02e4dd2.jpeg",
            description:`Fabrízzio Ruiz, mais conhecido como "Smee", começou sua jornada na Bateria S/A no ano de 2007 e trilhou nela uma jornada de muitos desafios e conquista.\n
                         Eventualmente se tornou jurado de torneios, e atualemte já julgou mais de 100 desafios por todo o brasil.`,
            nickname:"Smee"
        },
        {
            id:"61fd3f77-bb03-4f98-a6e5-99d45996051a",
            first_name:"Daniel",
            last_name:"Mendonça",
            avatar:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/61fd3f77-bb03-4f98-a6e5-99d45996051a.jpeg",
            description:"",
            nickname:"Tião"
        },
        {
            id:"41baab20-e9f0-489e-ac7d-67a125d1597d",
            first_name:"Danilo",
            last_name:"",
            avatar:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/41baab20-e9f0-489e-ac7d-67a125d1597d.jpeg",
            description:"",
            nickname:"Buiu"
        },
        {
            id:"4d6da340-b216-4c22-946d-957461fcd9be",
            first_name:"Lucas",
            last_name:"Eduardo",
            avatar:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/4d6da340-b216-4c22-946d-957461fcd9be.jpeg",
            description:"",
            nickname:"Lukinas Eduardo"
        },
        {
            id:"853aebe9-29a3-4a81-9570-d602b67ba898",
            first_name:"Paulo",
            last_name:"Saviani",
            avatar:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/853aebe9-29a3-4a81-9570-d602b67ba898.jpeg",
            description:"",
            nickname:"Paulinho Saviani"
        },
        {
            id:"6f033da3-cbcd-42af-9631-ea5551a2e5bd",
            first_name:"José",
            last_name:"Góis",
            avatar:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/6f033da3-cbcd-42af-9631-ea5551a2e5bd.jpeg",
            description:"",
            nickname:"Zé Góis"
        },
        {
            id:"42ea2c8f-698b-4a7c-b366-f853d9cf286d",
            first_name:"Danilo",
            last_name:"Profitti",
            avatar:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/42ea2c8f-698b-4a7c-b366-f853d9cf286d.jpeg",
            description:"",
            nickname:"Persa"
        },
        {
            id:"0e9b1995-101d-4125-921d-2c9f2b83cb2f",
            first_name:"Jonas",
            last_name:"Lessa",
            avatar:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/0e9b1995-101d-4125-921d-2c9f2b83cb2f.jpeg",
            description:"",
            nickname:"Jonas Lessa"
        },
        {
            id:"960a9cd7-9c63-4bf0-9257-233f21211695",
            first_name:"André",
            last_name:"Feijó",
            avatar:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/960a9cd7-9c63-4bf0-9257-233f21211695.jpeg",
            description:"",
            nickname:"Feijó"
        },
        {
            id:"222a2a5e-93c1-4383-adb0-838f2c4d97c0",
            first_name:"Carlos",
            last_name:"Diaz",
            avatar:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/222a2a5e-93c1-4383-adb0-838f2c4d97c0.jpeg",
            description:"",
            nickname:"Carlitos"
        },
        {
            id:"4948fac1-261a-4c76-bcd7-3921a55b8209",
            first_name:"Victor",
            last_name:"Guimarães Bertoni",
            avatar:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/4948fac1-261a-4c76-bcd7-3921a55b8209.jpeg",
            description:"",
            nickname:"Cego"
        },
        {
            id:"96700790-bc76-41c7-98dd-8156fa41a80e",
            first_name:"Rodrigo",
            last_name:"",
            avatar:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/96700790-bc76-41c7-98dd-8156fa41a80e.jpeg",
            description:"",
            nickname:"Moleza"
        },
        {
            id:"d6a3a170-7c83-4239-9d91-9d6d3db6c526",
            first_name:"Luiza",
            last_name:"Vanini",
            avatar:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/d6a3a170-7c83-4239-9d91-9d6d3db6c526.jpeg",
            description:"",
            nickname:"Lu Vanini"
        },
        {
            id:"f3a798fd-c8a6-42cb-9854-f8311e2ea952",
            first_name:"Robson",
            last_name:"",
            avatar:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/f3a798fd-c8a6-42cb-9854-f8311e2ea952.jpeg",
            description:"",
            nickname:"Zoinho"
        },
        {
            id:"f49b5ad3-3584-4842-816c-d638e732bc05",
            first_name:"Rogério",
            last_name:"Figueira",
            avatar:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/f49b5ad3-3584-4842-816c-d638e732bc05.jpeg",
            description:"",
            nickname:"Tiguês"
        },
        {
            id:"5bc85937-7922-4ca9-88cf-b450ddc97609",
            first_name:"Letícia",
            last_name:"",
            avatar:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/5bc85937-7922-4ca9-88cf-b450ddc97609.jpeg",
            description:"",
            nickname:"Letícia Chilli"
        },
        {
            id:"d129a00e-a52f-4320-a6b9-0a793a6f5fd9",
            first_name:"Yan",
            last_name:"Piscerne",
            avatar:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/d129a00e-a52f-4320-a6b9-0a793a6f5fd9.jpeg",
            description:"",
            nickname:"Yan Piscerne"
        },
        {
            id:"dfd1e98f-42bb-46f8-bf09-347ca9dc4076",
            first_name:"Gabriela",
            last_name:"Almeida",
            avatar:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/dfd1e98f-42bb-46f8-bf09-347ca9dc4076.jpeg",
            description:"",
            nickname:"Gabs Almeida"
        },
        {
            id:"c564e10c-5867-443e-917e-f6f7ad0e826e",
            first_name:"Caíque",
            last_name:"Rocha",
            avatar:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/c564e10c-5867-443e-917e-f6f7ad0e826e.jpeg",
            description:"",
            nickname:"Chaíque"
        },
        {
            id:"5ecffe69-78b1-41db-b11a-cec80b1300e7",
            first_name:"José",
            last_name:"Eduardo",
            avatar:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/5ecffe69-78b1-41db-b11a-cec80b1300e7.jpeg",
            description:"",
            nickname:"Zedu"
        },
        {
            id:"51ebea07-637a-41b4-b1d4-1527bd1e0d9e",
            first_name:"Isabela",
            last_name:"Borges",
            avatar:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/51ebea07-637a-41b4-b1d4-1527bd1e0d9e.jpeg",
            description:"",
            nickname:"Isa Borges"
        },
        {
            id:"6844cf00-4de0-4c82-895b-7dca2f77bf91",
            first_name:"Marcelo",
            last_name:"Pires",
            avatar:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/6844cf00-4de0-4c82-895b-7dca2f77bf91.jpeg",
            description:"",
            nickname:"Tieta"
        },
        {
            id:"11222698-de1e-48f1-955c-b4c907192121",
            first_name:"Franci",
            last_name:"Óliver",
            avatar:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/11222698-de1e-48f1-955c-b4c907192121.jpeg",
            description:"",
            nickname:"Franci Óliver"
        },
        {
            id:"11222698-de1e-48f1-955c-b4c907192121",
            first_name:"Mari",
            last_name:"Farias",
            avatar:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/11222698-de1e-48f1-955c-b4c907192121.jpeg",
            description:"",
            nickname:"Mari Farias"
        }
    ]})

    /* Baterias */
    await prisma.competitor.createMany({data:[
        {
            id:"",
            name:"",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/.jpeg",
            description:"",
        },
        {
            id:"375fab74-c7d7-4732-880f-505a189e3109",
            name:"Bateria Computaria",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/375fab74-c7d7-4732-880f-505a189e3109.jpeg",
            description:"",
        },
        {
            id:"dd7d197b-37e2-47a8-8004-ab1f1bcc3f43",
            name:"Bateria Meritíssima",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/dd7d197b-37e2-47a8-8004-ab1f1bcc3f43.jpeg",
            description:"",
        },
        {
            id:"84ea8b14-7e98-4dbb-840f-8e8a530a6a6b",
            name:"Bateria Mercenária",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/84ea8b14-7e98-4dbb-840f-8e8a530a6a6b.jpeg",
            description:"",
        },
        {
            id:"41e585a2-b6a1-4454-b98f-c5c58b272685",
            name:"Bateria Predadora",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/41e585a2-b6a1-4454-b98f-c5c58b272685.jpeg",
            description:"",
        },
        {
            id:"51105ca2-9540-481e-be5d-17d9608a76e0",
            name:"Bateria Artilharia",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/51105ca2-9540-481e-be5d-17d9608a76e0.jpeg",
            description:"",
        },
        {
            id:"70c32272-f62a-4241-bcfb-601ec7d061cb",
            name:"Bateria Incendiária",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/70c32272-f62a-4241-bcfb-601ec7d061cb.jpeg",
            description:"",
        },
        {
            id:"6025b6fa-0aa9-4347-aede-aed0d6054b46",
            name:"Bateria Insana",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/6025b6fa-0aa9-4347-aede-aed0d6054b46.jpeg",
            description:"",
        },
        {
            id:"9e6504ba-cbfd-47db-91df-e4144f2dea56",
            name:"Bateria Intravenosa",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/9e6504ba-cbfd-47db-91df-e4144f2dea56.jpeg",
            description:"",
        },
        {
            id:"fb598b26-b815-4f4e-9e38-781d56dcc452",
            name:"Bateria Invasora",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/fb598b26-b815-4f4e-9e38-781d56dcc452.jpeg",
            description:"",
        },
        {
            id:"f058a509-e243-4b0e-8211-20eb1df9b594",
            name:"Bateria Dentadura",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/f058a509-e243-4b0e-8211-20eb1df9b594.jpeg",
            description:"",
        },
        {
            id:"2a57976a-bc57-4b93-a014-c19585fbbbca",
            name:"Bateria Cachorro Manco",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/2a57976a-bc57-4b93-a014-c19585fbbbca.jpeg",
            description:"",
        },
        {
            id:"cfbdfbd1-42cd-46a8-8d87-679bcdd3def4",
            name:"Bateria Charanga UFU",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/cfbdfbd1-42cd-46a8-8d87-679bcdd3def4.jpeg",
            description:"",
        },
        {
            id:"2b65a90b-b572-45ec-a130-0c2e3f1ca72c",
            name:"Bateria Primata",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/2b65a90b-b572-45ec-a130-0c2e3f1ca72c.jpeg",
            description:"",
        },
        {
            id:"66b721bc-f8e0-4f44-9c75-89df13b50453",
            name:"Bateria ESPM",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/66b721bc-f8e0-4f44-9c75-89df13b50453.jpeg",
            description:"",
        },
        {
            id:"c9b0fc45-afe1-49cb-be2d-03d2ad4fc9ec",
            name:"Bateria S/A",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/c9b0fc45-afe1-49cb-be2d-03d2ad4fc9ec.jpeg",
            description:"",
        },
        {
            id:"dfe40477-dfee-485c-ac67-f16132083cb6",
            name:"Bateria Infanteria",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/dfe40477-dfee-485c-ac67-f16132083cb6.jpeg",
            description:"",
        },
        {
            id:"98793307-a89e-4540-8bf4-a83cb0449b64",
            name:"Batorada Vaca Magra",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/98793307-a89e-4540-8bf4-a83cb0449b64.jpeg",
            description:"",
        },
        {
            id:"995ea7dd-ebb5-4d79-b11e-1f8e7b16fe06",
            name:"Bateria UFSCar",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/995ea7dd-ebb5-4d79-b11e-1f8e7b16fe06.jpeg",
            description:"",
        },
        {
            id:"ab2e8d69-4287-4b44-87fe-c03854ad5357",
            name:"Bateria UFUteria",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/ab2e8d69-4287-4b44-87fe-c03854ad5357.jpeg",
            description:"",
        },
        {
            id:"9dba97cf-1c73-425e-a705-8196b195502c",
            name:"Bateria da Tourada",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/9dba97cf-1c73-425e-a705-8196b195502c.jpeg",
            description:"",
        },
        {
            id:"4255efe5-e3c3-424b-943b-014acb65f2cd",
            name:"Bateria C7",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/4255efe5-e3c3-424b-943b-014acb65f2cd.jpeg",
            description:"",
        },
        {
            id:"bbdb02df-f609-42d2-8186-dd6e80c8c2ec",
            name:"Bateria Tatubola",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/bbdb02df-f609-42d2-8186-dd6e80c8c2ec.jpeg",
            description:"",
        },
        {
            id:"07d2be00-feeb-4c0c-8f46-45d4257d5158",
            name:"Bateria Rateria",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/07d2be00-feeb-4c0c-8f46-45d4257d5158.jpeg",
            description:"",
        },
        {
            id:"b1148b52-6f47-4090-908a-58e9ea8bddc2",
            name:"Bateria Einsteria",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/b1148b52-6f47-4090-908a-58e9ea8bddc2.jpeg",
            description:"",
        },
        {
            id:"7bf6fcb1-1cc2-4151-ac6b-9c81cd6ffd42",
            name:"Bateria Bandida",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/7bf6fcb1-1cc2-4151-ac6b-9c81cd6ffd42.jpeg",
            description:"",
        },
        {
            id:"a162e9bc-4b25-4f03-89ff-8f3edd9b924b",
            name:"Bateria Tubatuque",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/a162e9bc-4b25-4f03-89ff-8f3edd9b924b.jpeg",
            description:"",
        },
        {
            id:"78980569-e9a9-4cbf-9d18-f153747d1d97",
            name:"Bateria Azzurra",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/78980569-e9a9-4cbf-9d18-f153747d1d97.jpeg",
            description:"",
        },
        {
            id:"0309b12d-3da7-4732-b9ac-77878fbe3d47",
            name:"Bateria 51",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/0309b12d-3da7-4732-b9ac-77878fbe3d47.jpeg",
            description:"",
        },
        {
            /* rino amarelo */
            id:"ef4f7fb3-dcca-4200-8ccd-a1779895bbc4",
            name:"Bateria Furiosa",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/ef4f7fb3-dcca-4200-8ccd-a1779895bbc4.jpeg",
            description:"",
        },
        {
            id:"350ae4fc-d829-43a7-b098-9db6567285f6",
            name:"Bateria Imperial",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/350ae4fc-d829-43a7-b098-9db6567285f6.jpeg",
            description:"",
        },
        {
            id:"2ffbf17a-b86a-41d0-94bc-08a06c9ae024",
            name:"Bateria Epidemia",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/2ffbf17a-b86a-41d0-94bc-08a06c9ae024.jpeg",
            description:"",
        },
        {
            id:"e1fca00f-4366-4eb6-bb51-3b0fd28659ef",
            name:"BaterEca",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/e1fca00f-4366-4eb6-bb51-3b0fd28659ef.jpeg",
            description:"",
        },
        {
            id:"f11d81f4-a392-4dcf-8efc-8ab61d0a9028",
            name:"Bateria Ausculta",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/f11d81f4-a392-4dcf-8efc-8ab61d0a9028.jpeg",
            description:"",
        },
        {
            id:"deee339f-4e80-44e5-93cb-2734b74f0cc3",
            name:"Bateria Mamuteria",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/deee339f-4e80-44e5-93cb-2734b74f0cc3.jpeg",
            description:"",
        },
        {
            id:"82bbd4e5-a1b5-4a1d-be4c-4e4c4033e3e8",
            name:"Bateria Cherateria",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/82bbd4e5-a1b5-4a1d-be4c-4e4c4033e3e8.jpeg",
            description:"",
        },
        {
            id:"ff85b815-85d6-4d13-a53a-e4b891492ed1",
            name:"Bateria da Cásper",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/ff85b815-85d6-4d13-a53a-e4b891492ed1.jpeg",
            description:"",
        },
        {
            id:"1ad4ff6d-57ea-42ef-825d-302920014404",
            name:"Bateria da Maloca",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/1ad4ff6d-57ea-42ef-825d-302920014404.jpeg",
            description:"",
        },
        {
            id:"15bc13b0-cd4c-4d8f-87aa-f632de25b673",
            name:"Bateria Medbloco",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/15bc13b0-cd4c-4d8f-87aa-f632de25b673.jpeg",
            description:"",
        },
        {
            id:"6c0c6506-f5e6-4b4c-9226-fce8354a0fa8",
            name:"Bateria Carniceiros",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/6c0c6506-f5e6-4b4c-9226-fce8354a0fa8.jpeg",
            description:"",
        },
        {
            id:"cda66ed9-f8fe-4d50-8248-a9fcd99669ee",
            name:"Bateria Azzurra",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/cda66ed9-f8fe-4d50-8248-a9fcd99669ee.jpeg",
            description:"",
        },
        {
            id:"304127f1-9445-4178-9718-7cc8de5a8158",
            name:"Bateria Batucateia",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/304127f1-9445-4178-9718-7cc8de5a8158.jpeg",
            description:"",
        },
        {
            id:"1b2437d7-44a0-4022-ae9e-b65290750d9e",
            name:"Bateria Homunculoco",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/1b2437d7-44a0-4022-ae9e-b65290750d9e.jpeg",
            description:"",
        },
        {
            id:"83a8eec6-f007-4759-b1e9-5adcea5c468d",
            name:"Bateria Farmatuque",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/83a8eec6-f007-4759-b1e9-5adcea5c468d.jpeg",
            description:"",
        },
        {
            id:"a9c8dfab-2eb4-439f-b45e-5592a7c2725e",
            name:"Bateria Pirateria",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/a9c8dfab-2eb4-439f-b45e-5592a7c2725e.jpeg",
            description:"",
        },
        {
            id:"b96b2b81-302c-481f-a301-c409f01c3f76",
            name:"Bateria Os Federais",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/b96b2b81-302c-481f-a301-c409f01c3f76.jpeg",
            description:"",
        },
        {
            /* cavalo verde */
            id:"7a43e46c-6b47-448c-88e1-d6530bf7b4b3",
            name:"Bateria Furiosa",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/7a43e46c-6b47-448c-88e1-d6530bf7b4b3.jpeg",
            description:"",
        },
        {
            id:"d29fb081-5b7e-4342-ad32-9f9adc05fecd",
            name:"Bateria Rapozona",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/d29fb081-5b7e-4342-ad32-9f9adc05fecd.jpeg",
            description:"",
        },
        {
            id:"4c3bbeec-8846-45b1-a73f-052c4eb6282d",
            name:"Bateria Limeteria",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/4c3bbeec-8846-45b1-a73f-052c4eb6282d.jpeg",
            description:"",
        },
        {
            id:"e0a24f97-3cab-41f7-aead-b74c40b39354",
            name:"Bateria Histeria",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/e0a24f97-3cab-41f7-aead-b74c40b39354.jpeg",
            description:"",
        },
        {
            id:"87dd51b4-c46f-4715-a526-38c0e6dfb638",
            name:"Bateria Batimeduca",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/87dd51b4-c46f-4715-a526-38c0e6dfb638.jpeg",
            description:"",
        },
        {
            id:"40f3349a-347a-44ec-a13e-71a3b9e90dc5",
            name:"Bateria Manda Chuva",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/40f3349a-347a-44ec-a13e-71a3b9e90dc5.jpeg",
            description:"",
        },
        {
            id:"9ee8b629-6718-4a85-9501-89cea00fa948",
            name:"Bateria Repicapau",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/9ee8b629-6718-4a85-9501-89cea00fa948.jpeg",
            description:"",
        },
        {
            id:"d2434c54-5c1f-44e4-9af2-3a1b39e8396e",
            name:"Jabuteria",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/d2434c54-5c1f-44e4-9af2-3a1b39e8396e.jpeg",
            description:"",
        },
        {
            id:"de50f6fd-6c07-4ae5-89fa-480070c77c70",
            name:"Bateria Arritmia",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/de50f6fd-6c07-4ae5-89fa-480070c77c70.jpeg",
            description:"",
        },
        {
            id:"dc8b29c6-eb20-4332-b9b9-687e38e6ad85",
            name:"Bateria Naumteria",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/dc8b29c6-eb20-4332-b9b9-687e38e6ad85.jpeg",
            description:"",
        },
        {
            id:"d5b436a1-be37-48e6-b502-783585fa7a60",
            name:"Bateria Fúria Capilar",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/d5b436a1-be37-48e6-b502-783585fa7a60.jpeg",
            description:"",
        },
        {
            id:"f9eaa716-a300-4ec4-83a4-395519300b34",
            name:"Bateria PercUrsão",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/f9eaa716-a300-4ec4-83a4-395519300b34.jpeg",
            description:"",
        },
        {
            id:"cff7df46-8372-4eb8-9d55-1c73842f45c3",
            name:"Bateria CodeBloco",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/cff7df46-8372-4eb8-9d55-1c73842f45c3.jpeg",
            description:"",
        },
        {
            id:"63b17adb-14b6-4fa3-b3c1-0058d507941e",
            name:"Bateria Danada",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/63b17adb-14b6-4fa3-b3c1-0058d507941e.jpeg",
            description:"",
        },
        {
            id:"c6a8a6d9-2c57-4b0e-8962-2ba3f08a09a4",
            name:"Bateria Danada",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/c6a8a6d9-2c57-4b0e-8962-2ba3f08a09a4.jpeg",
            description:"",
        },
        {
            /* Guará */
            id:"7c5caec1-e4fc-401a-aadf-8189021096e8",
            name:"Bateria Lobateria",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/7c5caec1-e4fc-401a-aadf-8189021096e8.jpeg",
            description:"",
        },
        {
            id:"5a1bd2db-fe3f-4746-bac9-3056874c461d",
            name:"Bateria Bruteria",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/5a1bd2db-fe3f-4746-bac9-3056874c461d.jpeg",
            description:"",
        },
        {
            id:"c0a25870-b201-436d-9041-0e4b19b97d2c",
            name:"Bateria Taubateria",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/c0a25870-b201-436d-9041-0e4b19b97d2c.jpeg",
            description:"",
        },
        {
            /* SJC */
            id:"5ad3ec52-b287-4dc9-91ca-694871387d95",
            name:"Bateria Lobateria",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/5ad3ec52-b287-4dc9-91ca-694871387d95.jpeg",
            description:"",
        },
        {
            /* UFSJ */
            id:"86c6e0a9-0c5c-4de7-82f8-492745112b67",
            name:"Bateria Lobateria",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/86c6e0a9-0c5c-4de7-82f8-492745112b67.jpeg",
            description:"",
        },
        {
            id:"0e73fa9c-c9a0-4525-a38e-e124ba2cc651",
            name:"Bateria Carniceria",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/0e73fa9c-c9a0-4525-a38e-e124ba2cc651.jpeg",
            description:"",
        },
        {
            id:"63d67102-2287-44dd-8b9a-9a97d3727a77",
            name:"Bateria Cilada",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/63d67102-2287-44dd-8b9a-9a97d3727a77.jpeg",
            description:"",
        },
        {
            id:"d7572fb3-0b01-4ef7-9889-f9064facd221",
            name:"Bateria Necromante",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/d7572fb3-0b01-4ef7-9889-f9064facd221.jpeg",
            description:"",
        },
        {
            id:"e3f6c05c-ccbb-4923-b766-0179021e1247",
            name:"Bateria ToroLoco",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/e3f6c05c-ccbb-4923-b766-0179021e1247.jpeg",
            description:"",
        },
        {
            id:"8dda6ecb-9ca0-4939-9a09-c61e5721397e",
            name:"Bateria Brocadora",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/8dda6ecb-9ca0-4939-9a09-c61e5721397e.jpeg",
            description:"",
        },
        {
            id:"c390b514-0f66-49db-aca9-00e73dd99022",
            name:"Bateria Cascuda",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/c390b514-0f66-49db-aca9-00e73dd99022.jpeg",
            description:"",
        },
        {
            id:"9d4b673d-a8bc-4f48-8914-02c8dd2353d1",
            name:"Bateria Muquirana",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/9d4b673d-a8bc-4f48-8914-02c8dd2353d1.jpeg",
            description:"",
        },
        {
            id:"ffcbeb5e-ee3d-4014-be72-c6f20f5a8b51",
            name:"Bateria Os Coringas",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/ffcbeb5e-ee3d-4014-be72-c6f20f5a8b51.jpeg",
            description:"",
        },
        {
            id:"5ee25c42-37a6-4d83-8d31-7ddcbd70e6b5",
            name:"Bateria Los Borrachos",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/5ee25c42-37a6-4d83-8d31-7ddcbd70e6b5.jpeg",
            description:"",
        },
        {
            id:"2bb5b44a-0a73-47d7-a8f4-fa2125188946",
            name:"Bateria Hooligans",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/2bb5b44a-0a73-47d7-a8f4-fa2125188946.jpeg",
            description:"",
        },
        {
            id:"876c78bd-bd10-43c9-9736-931571f625f9",
            name:"Bateria Avalanche",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/876c78bd-bd10-43c9-9736-931571f625f9.jpeg",
            description:"",
        },
        {
            id:"4c427a26-8517-4760-bf08-9885f3972383",
            name:"Bateria Máfia Acadêmica",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/4c427a26-8517-4760-bf08-9885f3972383.jpeg",
            description:"",
        },
        {
            /* jjm */
            id:"438763a1-2562-4e70-b6b7-aca01aaa3618",
            name:"Bateria Esparteria",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/438763a1-2562-4e70-b6b7-aca01aaa3618.jpeg",
            description:"",
        },
        {
            id:"a6163983-6c8a-4a57-aa75-e8623ec2b821",
            name:"Bateria Suprema",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/a6163983-6c8a-4a57-aa75-e8623ec2b821.jpeg",
            description:"",
        },
        {
            /* ufla */
            id:"e8397d3a-676f-4af8-afa1-2518cb2a0579",
            name:"Bateria Predadora",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/e8397d3a-676f-4af8-afa1-2518cb2a0579.jpeg",
            description:"",
        },
        {
            id:"f24dfa4e-b293-47fd-9c24-af0192dd83cc",
            name:"Bateria Malvadeza",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/f24dfa4e-b293-47fd-9c24-af0192dd83cc.jpeg",
            description:"",
        },
        {
            id:"c4d75997-3957-4857-9eb0-7e35a5ec3d10",
            name:"Bateria UFMG",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/c4d75997-3957-4857-9eb0-7e35a5ec3d10.jpeg",
            description:"",
        },
        {
            id:"57469801-a931-4d3f-8cca-f15835f39d14",
            name:"Bateria Puteria",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/57469801-a931-4d3f-8cca-f15835f39d14.jpeg",
            description:"",
        },
        {
            id:"8de5212b-fb1b-40f8-b4b2-157456b9ca8f",
            name:"Bateria Enfernalha",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/.jpeg",
            description:"",
        },
        {
            id:"98c0f9bf-5815-453b-87cd-2f97f49b96e4",
            name:"Bateria Mafiosa",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/.jpeg",
            description:"",
        },
        {
            id:"45195e6b-9f17-41e6-a913-fd2efd8da5f4",
            name:"Bateria Gaperia",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/45195e6b-9f17-41e6-a913-fd2efd8da5f4.jpeg",
            description:"",
        },
        {
            id:"8426e2e8-b4c7-405e-af2b-5ec223c288c2",
            name:"Bateria Maculosa",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/8426e2e8-b4c7-405e-af2b-5ec223c288c2.jpeg",
            description:"",
        },
        {
            id:"f58b6047-0717-4db5-ab39-1e87c578ce8c",
            name:"Bateria Psicolata",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/f58b6047-0717-4db5-ab39-1e87c578ce8c.jpeg",
            description:"",
        },
        {
            id:"edb07550-030c-41bb-9f3e-3a8cbbf89aab",
            name:"Bateria Xoxoteria",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/edb07550-030c-41bb-9f3e-3a8cbbf89aab.jpeg",
            description:"",
        },
        {
            id:"5961112b-05df-4bb2-9e74-cd081bfd46a5",
            name:"Bateria Brejodum",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/5961112b-05df-4bb2-9e74-cd081bfd46a5.jpeg",
            description:"",
        },
        {
            id:"617084e6-da00-4269-9dce-3ca3599d3a9d",
            name:"Bateria Atômica",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/617084e6-da00-4269-9dce-3ca3599d3a9d.jpeg",
            description:"",
        },
        {
            id:"af3e6156-9328-43fb-a042-861c28297214",
            name:"Bateria Sancabum",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/af3e6156-9328-43fb-a042-861c28297214.jpeg",
            description:"",
        },
        {
            id:"6ab831dd-c46f-4b28-b4a9-29c76631fcab",
            name:"Bateria Incendiária",
            profile_url:"https://bubet-bucket.s3.sa-east-1.amazonaws.com/judges/6ab831dd-c46f-4b28-b4a9-29c76631fcab.jpeg",
            description:"",
        },
    ]})

}


seed().then(()=>{
    console.log('Database seeded')
})