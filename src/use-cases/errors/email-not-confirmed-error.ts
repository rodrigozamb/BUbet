export class EmailNotConfirmedError extends Error{
    constructor(){
        super("Account not confirmed. Please check your email.")
    }
}