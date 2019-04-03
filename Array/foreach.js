let aprovados = ["Aldo", "Daniel", "Ana", "Lacuna"]

aprovados.forEach(function (value, key) {
    console.log(`${key}) ${value}`)
})

aprovados.forEach(value => console.log(value))

// Funcionamento interno foreach
Array.prototype.forEach2 = function (callback) {
    for (let index = 0; index < this.length; index++) {
        callback(this[index], index, this)
    }
}

aprovados = ["Aldo", "Daniel", "Ana", "Lacuna"]

aprovados.forEach2(function (value, key) {
    console.log(`${key}) ${value}`)
})