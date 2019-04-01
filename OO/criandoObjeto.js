// Usando a notação literal
const obj1 = {}
console.log(obj1)

// Object em JS
const obj2 = new Object
console.log(obj2)

// Construtoras
function Produto(nome, preco, desconto) {
    this.nome = nome
    this.getPrecoProduto = () => {
        return preco * (1 - desconto)
    }
}

const p1 = new Produto("Caneta", 7.54, 0.17)
const p2 = new Produto("Notebook", 2500.99, 0.80)
console.log(p1.getPrecoProduto(), p2.getPrecoProduto())

// Factory
function criarFuncionaria(nome, salario, faltas){
    return {
        nome,
        salario,
        faltas,
        getSalario: () => {
            return (salario / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionaria("Rubens", 7500, 15)
const f2 = criarFuncionaria("Maria", 11500, 4)
console.log(f1.getSalario(), f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = "Ana"
console.log(filha)

// Funcao JSON que retorna objeto
const fromJSON = JSON.parse('{"info": "Eu sou um JSON"}')
console.log(fromJSON.info)