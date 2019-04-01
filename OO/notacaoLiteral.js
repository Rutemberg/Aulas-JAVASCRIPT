const nomeAttr = 'nota'
const valorAttr = 7.84

const obj = {}
obj[nomeAttr] = valorAttr
console.log(obj)

const obj1 = { [nomeAttr]: valorAttr }
console.log(obj1)

const obj2 = {
    funcao: function () {
        //...
    },
    funcao2() {
        //...
    }
}

console.log(obj2)