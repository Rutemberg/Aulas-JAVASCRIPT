function fabricarObjetos() {
    return {
        nome: "Ana",
        idade: 45
    }
}

console.log(fabricarObjetos())

function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.5
    }
}

console.log(criarProduto("Notebook", 1500))
console.log(criarProduto("Celular", 540))

// Factory Vs Classe

class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa("Joao")
p1.falar()

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa("Joao")
p2.falar()