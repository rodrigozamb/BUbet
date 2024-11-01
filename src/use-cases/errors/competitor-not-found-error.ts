export class CompetitorNotFoundError extends Error{
    constructor(){
        super("Competitor not found")
    }
}