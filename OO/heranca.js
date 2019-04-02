const ferrari = {
    modelo: "F40",
    velMax: 350
}
const volvo = {
    modelo: "V40",
    velMax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)

function meuObjeto() { }
console.log(Object.prototype, meuObjeto.prototype)
