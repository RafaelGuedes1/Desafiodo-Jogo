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

// Criando instâncias de heróis com diferentes tipos
const mago = new Heroi('Frajola', 100, 'mago');
const guerreiro = new Heroi('pepa ping', 87, 'guerreiro');
const monge = new Heroi('Goku', 35, 'monge');
const ninja = new Heroi('Naruto', 17, 'ninja');

// Chamada do método atacar para cada herói
mago.atacar();       // O mago atacou usando magia
guerreiro.atacar();  // O guerreiro atacou usando espada
monge.atacar();      // O monge atacou usando artes marciais
ninja.atacar();      // O ninja atacou usando shuriken
