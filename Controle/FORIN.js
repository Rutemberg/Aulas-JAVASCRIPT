const notas = [5.6, 4.7, 8.9, 10]

for (let i in notas) {
    console.log(`${i} = ${notas[i]}`)
}

const pessoa = {
    nome: "Marcela",
    idade: 25,
    peso: 54,
    sobrenome: "Barbosa"
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}