export class InvalidCredentialsError extends Error{
    constructor(){
        super("Credenciais incorretas.. Por favor tente novamente!")
    }
}