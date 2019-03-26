const peso1 = 1.0
const peso2 = Number("2.0")

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.874
const avaliacao2 = 6.689

const total = avaliacao1 * peso1 * avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // duas casas decimais
console.log(media.toString()) // para string
console.log(media.toString(2)) // em binario
console.log(typeof media)
console.log(typeof Number)

///////////////////////////////////////////////////////

console.log(7 / 0)
console.log("10" / 2)
console.log("show" * 2) // NaN -> not a number
console.log(0.1 + 0.7)
// console.log(10.toString()) 
console.log((10.354).toFixed(2)) // entre parenteses

///////////////////////////////////////////////////////

const raio = 5.6
const area = Math.PI * Math.pow(raio, 2)

console.log(area.toFixed(2))
console.log(typeof Math)