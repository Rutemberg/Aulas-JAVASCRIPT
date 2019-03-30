// Arrow function

let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a

// Em arrow o this aponta para o objeto pai

console.log(dobro(Math.PI))

function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000);
}

// new Pessoa

// Em funcao normal o this aponta para o global

let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)

// Vinculando o this atraves do metodo Bind()

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

/* Arrow function nao aponta o this atraves do Bind()
   This aponta para o obejto em contexto no qual foi escrito */
   
let comparaComThisArrow = param => console.log(this === param)

comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)