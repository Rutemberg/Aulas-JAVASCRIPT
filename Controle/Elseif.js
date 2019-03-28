Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const resultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log("Quadro de honra")
    } else if (nota.entre(7, 8.99)) {
        console.log("Aprovado")
    } else if (nota.entre(4, 6.99)) {
        console.log("Reprovado")
    } else {
        console.log("Nota invalida")
    }
}

resultado(9)
resultado(8)
resultado(4)
resultado(-1)