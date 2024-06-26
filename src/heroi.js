const readline = require('readline');

// Classe Heroi
class Heroi {
  // Construtor para inicializar as propriedades da classe
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  // Método atacar que exibe a mensagem conforme o tipo do herói
  atacar(){ 
    let ataque;

    // Estrutura de decisão para definir o ataque conforme o tipo
    switch (this.tipo) {
      case 'mago':
        ataque = 'usou magia';
        break;
      case 'guerreiro':
        ataque = 'usou espada';
        break;
      case 'monge':
        ataque = 'usou artes marciais';
        break;
      case 'ninja':
        ataque = 'usou shuriken';
        break;
      default:
        ataque = 'fez um ataque desconhecido';
        break;
    }
    // Exibindo a mensagem do ataque
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Função para criar herói com base na entrada do usuário
function criarHeroi() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Digite o nome do herói: ", function(nome) {
    rl.question("Digite a idade do herói: ", function(idade) {
      rl.question("Escolha o tipo de herói (mago, guerreiro, monge, ninja): ", function(tipo) {
        const heroi = new Heroi(nome, parseInt(idade), tipo.toLowerCase());
        heroi.atacar();
        rl.close();
      });
    });
  });
}

// Criando o herói com base na entrada do usuário
criarHeroi();
