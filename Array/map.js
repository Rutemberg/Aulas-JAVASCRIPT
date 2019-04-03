const num = [1, 2, 3, 4, 5]

let resultado = num.map(function (e) {
    return e * 10
})

console.log(resultado)

const soma = e => e + 10
const triplo = e => e * 3
const toPrice = e => `R$ ${parseFloat(e).toFixed(2).replace(".", ",")}`

resultado = num.map(soma).map(triplo).map(toPrice)
console.log(resultado)

const carrinho = [
    '{"nome": "Borracha", "preco": 7.54}',
    '{"nome": "Caderno", "preco": 10}',
    '{"nome": "Kit de lapis", "preco": 75.54}',
    '{"nome": "Caneta", "preco": 2.87}'
]

const paraObjeto = e => (JSON.parse(e)).preco

let result = carrinho.map(paraObjeto)

console.log(result)

// Funcionamento interno map
Array.prototype.map2 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho2 = [
    '{"nome": "Borracha", "preco": 7.54}',
    '{"nome": "Caderno", "preco": 10}',
    '{"nome": "Kit de lapis", "preco": 75.54}',
    '{"nome": "Caneta", "preco": 2.87}'
]

const paraObjeto2 = e => (JSON.parse(e)).preco

result = carrinho2.map2(paraObjeto2)

console.log(result)

