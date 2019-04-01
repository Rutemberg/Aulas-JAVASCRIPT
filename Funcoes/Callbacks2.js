const fabricantes = ['Mercedes', 'Audi', 'Subaru']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricantes => console.log(fabricantes))


// Sem callbacks 

const notas = [7.7, 6.5, 5.2, 8, 5]

let notasBaixas = []

for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])        
    }
}

console.log(notasBaixas)

// Com callbacks

notasBaixas = notas.filter(function (nota) {
    return nota > 7
})

console.log(notasBaixas)

// Arrow
const notaMenor = nota => nota < 7
notasBaixas = notas.filter(notaMenor)

console.log(notasBaixas)