// Dados do aluno
const nomeAluno = "vinicius alves";
const idadeAluno = 17;
const disciplinas = ["Matemática", "Português", "História", "Geografia"];
const concluiuCurso = false;
let notaFinal = 0; // Inicializada com 0, será atualizada se o aluno concluir o curso

// Objeto do aluno
const aluno = {
  nome: nomeAluno,
  idade: idadeAluno,
  disciplinas,
  concluiuCurso,
  notaFinal
};

// Exibindo as informações do aluno
console.log("Nome do aluno:", aluno.nome);
console.log("Idade do aluno:", aluno.idade);
console.log("Disciplinas:", aluno.disciplinas);
console.log("Concluiu o curso:", aluno.concluiuCurso);
console.log("Nota final:", aluno.notaFinal);

console.log("\nInformações completas do aluno:", aluno);

// Verificando se o aluno concluiu o curso
if (aluno.concluiuCurso) {
  console.log(`O aluno ${aluno.nome} concluiu o curso com nota ${aluno.notaFinal}.`);
} else {
  console.log(`O aluno ${aluno.nome} ainda está cursando as disciplinas: ${aluno.disciplinas}.`);
}