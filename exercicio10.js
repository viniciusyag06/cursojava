// Definindo as informações do livro Coraline
const titulo = "Coraline";
const autor = "Neil Gaiman";
const paginas = 208;
const disponivel = true;

// Criando um objeto para representar o livro
const livro = {
  titulo,
  autor,
  paginas,
  disponivel
};

// Exibindo as informações do livro
console.log("Título:", titulo);
console.log("Autor:", autor);
console.log("Número de páginas:", paginas);
console.log("Disponível:", disponivel);
console.log("Livro:", livro);

// Verificando a disponibilidade do livro
if (livro.disponivel) {
  console.log(`O livro '${livro.titulo}' está disponível para empréstimo.`);
} else {
  console.log(`O livro '${livro.titulo}' não está disponível no momento.`);
}