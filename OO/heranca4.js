String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}

console.log("Escola Cod3r".reverse())

Array.prototype.first = function(){
    return this[0]
}

console.log(["a", "b", "c"].first())
