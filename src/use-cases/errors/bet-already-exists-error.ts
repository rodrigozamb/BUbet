export class BetAlreadyExistsError extends Error{
    constructor(){
        super("Bet already exists")
    }
}