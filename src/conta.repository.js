import fs from "fs"; // importando biblioteca
let cache = []; // criando variavel para salvar o retorno da lista
export function lista() {
  const contasString = fs.readFileSync("dados/contas.json"); // lendo o arquivo como string
  try {
    cache = JSON.parse(contasString); // transformando de string para array
  } catch {
    cache = []; // quando hover erro chera array vazio
  }
  return cache;
}

export function salva(conta) {
  const listaDeContas = lista();
  listaDeContas.push(conta); // inserindo nova conta
  const contaString = JSON.stringify(listaDeContas); // transformando cache em string
  fs.writeFileSync("dados/contas.json", contaString); // escrevendo string no arquivo
}


