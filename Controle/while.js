function getNumberRandom(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0
let valorfinal = 0

while (opcao != 1) {
    opcao = getNumberRandom(1, 10)
    console.log(`A opção escolhida foi: ${opcao}`)
    valorfinal += opcao
}

console.log("FIM " + valorfinal)

// do while

opcao = 1
valorfinal = 1

do {
    opcao = getNumberRandom(1, 10)
    console.log(`A opção escolhida foi: ${opcao}`)
    valorfinal += opcao
} while (opcao != 1)

console.log("FIM " + valorfinal)