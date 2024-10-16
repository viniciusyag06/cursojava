const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite seu nome: ', (nome) => {
  rl.question('Digite sua idade atual: ', (idadeAtual) => {
    const idadeFutura = parseInt(idadeAtual) + 10;
    console.log(`Olá, ${nome}! Em 10 anos, você terá ${idadeFutura} anos.`);
    rl.close();
  });
});