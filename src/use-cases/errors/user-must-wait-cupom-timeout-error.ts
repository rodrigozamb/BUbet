export class UserMustWaitCupomTimeoutError extends Error{
    constructor(){
        super("Você precisa esperar mais um tempo para gerar um cupom.")
    }
}