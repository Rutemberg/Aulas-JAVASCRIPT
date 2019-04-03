Array.prototype.reduce2 = function (callback, valorInicial) {
    const indiceInicial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0]
    for (let i = indiceInicial; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const alunos = [
    { nome: "Robert", nota: 7.45, bolsista: true },
    { nome: "Maria", nota: 4.45, bolsista: true },
    { nome: "Robert", nota: 8.8, bolsista: false },
    { nome: "Robert", nota: 10, bolsista: true }
]

const result = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(result.toFixed(2))

const bolsista = aluno => aluno.bolsista
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(bolsista).reduce(todosBolsistas))

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(bolsista).reduce(algumBolsista))

const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce(soma))