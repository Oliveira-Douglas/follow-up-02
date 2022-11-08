import validator from "validator";
import { lista } from "../conta.repository";
export function criaContaValidator(nome, email, senha) {
  const resultado = {
    temErro: false,
    erros: [],
    dados: {
      nome,
      email,
      senha,
    },
  };
  if (validator.isEmpty(nome)) {
    adicionaErro("nome", "Nome não pode ser vazio")
  }
  if (validator.isEmail(email)) {
    adicionaErro("email", "Deve ser um email valido")
  }
  if (!validator.isLength(senha, {min:8})) {
    adicionaErro("senha", "Senha deve conter no minimo 8 caracteres")
  }
  if (lista().map(conta => conta.email).includes(email)){
        adicionaErro("email", "Deve ser unico")
  }
  function adicionaErro (campo, mensagem){
    resultado.erros.push({campo, mensagem})
    resultado.temErro = true;
  }
  return resultado
}
