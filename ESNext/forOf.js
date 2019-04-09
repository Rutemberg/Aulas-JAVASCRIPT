for (const letras of "object") {
    console.log(letras)
}

const assuntos = ["Map", "Set", "Promise"]

for (let key in assuntos) {
    console.log(key)
}

for (const value of assuntos) {
    console.log(value)
}

const assuntosMap = new Map([
    ["Map", { abordado: true }],
    ["Set", { abordado: true }],
    ["Promise", { abordado: false }]
])

for (const iterator of assuntosMap) {
    console.log(iterator)
}

for (const chaves of assuntosMap.keys()) {
    console.log(chaves)
}

for (const valores of assuntosMap.values()) {
    console.log(valores)
}

for (let [ch, vl] of assuntosMap.entries()){
    console.log(ch, vl)
}

const s = new Set(["a","b","c"])
for (const letra of s) {
    console.log(letra)
}