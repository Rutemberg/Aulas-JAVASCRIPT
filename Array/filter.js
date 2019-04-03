// Funcionamento interno Filter
Array.prototype.filter2 = function(callback){
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i])
        }        
    }
    return newArray
}

const produtos = [
    { nome: "Iphone", preco: 5000, fragil: true },
    { nome: "Ipad", preco: 2500, fragil: true },
    { nome: "Cadeira", preco: 78, fragil: false },
    { nome: "Copo de madeira", preco: 45, fragil: false }
]

const filterPreco = produto => produto.preco <= 500
const filterFragil = produto => produto.fragil === false

console.log(produtos.filter2(filterPreco).filter(filterFragil))

