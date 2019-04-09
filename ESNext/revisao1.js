//let e const 
{
    var a = 1
    let b = 2
    console.log(b)
}
console.log(a)

// Template string 
const produto = "Ipad"
console.log(`${produto} é caro!`)

// Desestruturing
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const {idade: i, nome} = {nome: "Arna", idade: 9}
console.log(i, nome)
