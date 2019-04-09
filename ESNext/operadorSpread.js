// operador ... rest(juntar)/spread(espalhar)
// usar rest com parametro de funcao
// usar spread com objeto

// spread com objeto
const funcionario = { nome: "Maria", salario: 12547.45 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

// spread com array
const grupoA = ["joao", "maria", "marcos"]
const grupoB = [ ...grupoA, "trabuco", "Maricruz"]
console.log(grupoB)