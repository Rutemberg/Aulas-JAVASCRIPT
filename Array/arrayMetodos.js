const pilotos = ["Massa", "Vettel", "Alonso", "Rubens"]
pilotos.pop() // Deleta ultimo elemento
console.log(pilotos)

pilotos.push("Verstaten")
console.log(pilotos)

pilotos.shift() // Remove o primeiro
console.log(pilotos)

pilotos.unshift("Hamilton") // Adiciona o primeiro
console.log(pilotos)

/*
* 1° parametro = apartir
* 2° parametro = qntd a ser deletada
*/
pilotos.splice(2, 0, "Bottas")
console.log(pilotos)

pilotos.splice(3, 1)
console.log(pilotos)

let algunsPilotos = pilotos.slice(2)// <- apartir do elemento cria-se outro array
console.log(algunsPilotos)

algunsPilotos = pilotos.slice(1,3)
console.log(algunsPilotos)