// Declarando as variáveis
const nome = "vinicius alves";
const idade = 17;
const inscrito = true;
const curso = "Programação Front-end";

// Criando o objeto usuário
const usuario = {
  nome: nome,
  idade: idade,
  inscrito: inscrito,
  curso: curso
};

// Exibindo as informações individualmente
console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Inscrito:", inscrito);
console.log("Curso:", curso);

// Exibindo o objeto completo
console.log("Usuário:", usuario);

// Verificando o status de inscrição
if (usuario.inscrito) {
  console.log(`${usuario.nome} está inscrito no curso de ${usuario.curso}.`);
} else {
  console.log(`${usuario.nome} não está inscrito em nenhum curso.`);
}