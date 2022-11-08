import { lista } from "../../src/conta.repository.js"
import { criaUsuario } from "../../src/casos-de-uso/cria-usuario.js"
console.log(criaUsuario("Douglas", "douglas@email", "123456" ))
console.log(lista())