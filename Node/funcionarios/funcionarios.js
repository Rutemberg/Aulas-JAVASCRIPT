const url = "http://files.cod3r.com.br/curso-js/funcionarios.json"
const axios = require("axios")


const sexo = f => f.genero === "F"
const pais = f => f.pais === "China"
const getSalarioMin = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios.filter(pais).filter(sexo).reduce(getSalarioMin))
})

