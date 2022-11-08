import crypto from "crypto"  // importando biblioteca do crypto
import { salva } from "../conta.repository.js"
import { criaContaValidator } from "../validator/cria-conta.validator.js"
export function criaUsuario (nome, email, senha) {   // criando funçao e declarando parametros 
    const resultadoDaValidacao = criaContaValidator(nome, email, senha)
    if (resultadoDaValidacao.temErro){
        return resultadoDaValidacao.erros
    }
    const contaCriada =  {
        id: crypto.randomUUID(),        // informando o retorno da função
        nome,                               
        email,                          // informando que a função retorna objetos
        senha,
        dataDeCriacao: new Date().toISOString().slice(0,10) // instanciando obj atraves de construtor
    } 
    salva(contaCriada)
    return contaCriada
}

