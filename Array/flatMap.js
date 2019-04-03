const escola = [{
    nome: "Turma M1",
    alunos: [{
        nome: "Gustavo",
        nota: 8.1
    }, {
        nome: "Ana",
        nota: 9.1
    }]
}, {
    nome: "Turma M2",
    alunos: [{
        nome: "Rebeca",
        nota: 7.0
    }, {
        nome: "Roberto",
        nota: 5.3
    }]
}]

const getNotasDoAluno = aluno => aluno.nota
const getNotaDasTurmas = turma => turma.alunos.map(getNotasDoAluno)

const nota1 = escola.map(getNotaDasTurmas)
console.log(nota1)

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotaDasTurmas)
console.log(notas2)