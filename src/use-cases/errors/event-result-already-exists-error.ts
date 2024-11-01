export class EventResultAlreadyExistsError extends Error{
    constructor(){
        super("There is already a result for the competitor in this event")
    }
}