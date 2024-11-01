import { Competitor } from "@prisma/client"
import { CompetitorsRepository } from "@/repositories/competitors-repository"
import { CompetitorAlreadyExistsError } from "../errors/competitor-already-exists-error"
import { s3 } from "@/utils/s3"
import { env } from "@/env"
import { v4 as uuid} from 'uuid'

interface CreateCompetitorUseCaseRequest{
    name:string
    description:string
    logo_image: any
}

interface CreateCompetitorUseCaseResponse{
    competitor: Competitor
}

export class CreateCompetitorUseCase{

    constructor(
        private competitorsRepository: CompetitorsRepository, 
    ){}
    
    async execute({description,name,logo_image}:CreateCompetitorUseCaseRequest): Promise<CreateCompetitorUseCaseResponse>{

    
        const competitorWithSameEmail = await this.competitorsRepository.findByExactName(name)
    
        if(competitorWithSameEmail){
            throw new CompetitorAlreadyExistsError()
        }

        const competitor_id = uuid()


        // Set up the S3 upload parameters
        const uploadParams = {
            Bucket: env.AWS_BUCKET_NAME,       // Your S3 bucket name
            Key: `logos/competitor-${competitor_id}`,           // S3 object name (where to store in the bucket)
            Body: logo_image.buffer,                         // File content
            ContentType: logo_image.mimetype,                // File MIME type (e.g., image/png)
        };

        // Uploading the file to S3
        const s3Image = await s3.upload(uploadParams).promise();

        const competitor = await this.competitorsRepository.create({
            id:competitor_id ,description, name, profile_url: s3Image.Location
        })

        return {
            competitor
        }
    }

}