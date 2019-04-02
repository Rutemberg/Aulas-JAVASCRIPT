let aprovados = ["Carlos", "Andre", "Bia"]
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = "Paulo"
aprovados.push("Abiah")
console.log(aprovados.length)// tamanho

aprovados[9] = "Rafael"
console.log(aprovados.length)
console.log(aprovados)

aprovados.sort()// Reorganiza o array
console.log(aprovados)

delete aprovados[1]// excluir elemento singular
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ["Carlos", "Andre", "Bia"]
aprovados.splice(1, 0 /* <- elementos a serem excluidos */, "AddElemento1", "AddElemento2"/* <- Elementos a serem adicionados */)// excluir apartir do elemento, até..
console.log(aprovados)
