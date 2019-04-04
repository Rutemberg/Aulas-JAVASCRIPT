const url = "http://files.cod3r.com.br/curso-js/funcionarios.json"
const axios = require("axios")

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)

    const chinesas = funcionarios => (funcionarios.pais === "China") && (funcionarios.genero === "F")

    console.log(funcionarios.filter(chinesas))
})


// const getSalario = funcionarios => funcionarios.salario
// const min = funcionarios => Math.min(funcionarios)
// console.log(funcionarios)
