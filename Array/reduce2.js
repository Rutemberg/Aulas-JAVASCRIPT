const alunos = [
    { nome: "Carlos", nota: 7.88 },
    { nome: "Andre", nota: 9.77 }
]

const getNota = aluno => aluno.nota 
const sum = (aluno, total) => aluno + total

console.log(alunos.map(getNota).reduce(sum) / alunos.length)