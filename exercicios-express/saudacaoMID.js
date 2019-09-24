function saudacao(nome) {
    return (req, resp, next) => {
        console.log(`Seja bem vindo ${nome}.`)
        next()
    }
}

module.exports = saudacao