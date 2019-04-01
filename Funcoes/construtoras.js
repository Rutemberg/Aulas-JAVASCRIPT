function Carro(velocidadeMax = 200, delta = 5) {
    // Atributo privado
    let velocidadeAtual = 0

    /* 
    *  Metodo publico = this
    *  Metodo privado = let ou const
    */
    this.acelerar = function () {
        if(velocidadeAtual + delta <= velocidadeMax){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMax
        }
    }

    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

const uno = new Carro()
uno.acelerar()
uno.acelerar()
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 50)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())
