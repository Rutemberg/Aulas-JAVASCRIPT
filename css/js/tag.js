const colors = {
    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#d81b60',
    nav: '#64dd17',
    main: '#00acc1',
    footer: '#304ffe',
    form: '#9f6581',
    body: '#25b6da',
    padrao: '#616161',
    get(tag) {
        return this[tag] ? this[tag] : this.padrao
    }
}

document.querySelectorAll(".tag").forEach(elemento => {
    const tagName = elemento.tagName.toLowerCase();//pega o nome da tag do elemento e colocar em lowercase
    elemento.style.borderColor = colors.get(tagName) // aplica cor de borda

    if(!elemento.classList.contains("nolabel")){// se na lista da classe nao contem nolabel
        const label = document.createElement("label") // cria o eleneto label
        label.style.backgroundColor = colors.get(tagName) // aplica cor de borda
        label.innerHTML = tagName // escreve no label o nome capturado
        elemento.insertBefore(label, elemento.childNodes[0]) // insere no elemento o label criado apartir do primeiro elemento
    }

})