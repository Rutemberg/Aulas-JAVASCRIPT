// nao aceita repeticao/nao indexada

 const times = new Set()
 times.add("Vasco")
 times.add("Flamengo")
 times.add("Botafogo")
 times.add("Goias")

 console.log(times)
 console.log(times.size)
 console.log(times.has("vasco"))
 console.log(times.has("Vasco"))
 times.delete("Flamengo")
 console.log(times.has("Flamengo"))
 console.log(times.size)

 const nomes = ["Raquel", "Marcos", "Champs"]
 const nomesSet = new Set(nomes)
 console.log(nomesSet)

