// Uma factory retorna um novo objeto
const contadorA = require("./instanciaUnica")
const contadorB = require("./instanciaUnica")

const contadorC = require("./instanciaNova.js")()
const contadorD = require("./instanciaNova.js")()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorD.valor, contadorC.valor)