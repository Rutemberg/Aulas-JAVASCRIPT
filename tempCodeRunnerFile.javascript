const alunos = [
    { nome: "Carlos", nota: 7.88 },
    { nome: "Andre", nota: 9.77 }
]

const getNota = aluno => aluno.nota 

console.log(some(alunos.map(getNota)))