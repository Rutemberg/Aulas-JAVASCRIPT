// armazenando funcao em variavel 
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 5)

// armazenando uma funcao arrow em variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(5, 8))

// retorno implicito
const subtracao = (a, b) => a - b

console.log(subtracao(5,2))