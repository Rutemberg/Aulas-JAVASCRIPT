const pessoa = {
    saudacao: "Bom dia",
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()

// bind apontando para o objeto

const pessoaFalar = pessoa.falar.bind(pessoa)

pessoaFalar()