// Object.preventExtensions -> Não é possivel inserir atributos, apenas alterar/deletar 
const produto = Object.preventExtensions({
    nome: "Qualquer", preco: 7.99, desc: "Promocao"
}) 
console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = "borracha"
produto.tag = "1823245"
delete produto.desc
console.log(produto)

// Object.seal -> Nem adiciona/deleta atributos, apenas altera
const pessoa = {nome: "Ana", idade: 25}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

// Object.freeze = seal + prevent -> congela o objeto