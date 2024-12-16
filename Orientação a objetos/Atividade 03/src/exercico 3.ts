class Animal {
  nome: string;
  raca: string;

  constructor(nome: string, raca: string) {
    this.nome = nome;
    this.raca = raca;
  }

  emitirBarulho() {
    console.log(`${this.nome} emitiu barulho`);
  }

  comer() {
    console.log(`${this.nome} comeu`);
  }
}

class Cachorro extends Animal {
  constructor(nome: string, raca: string) {
    super(nome, raca);
    this.raca = raca;
  }

  latir() {
    console.log(`${this.nome}, o cachorro da raça ${this.raca} latiu!`);
  }
}

class Cavalo extends Animal {
  constructor(nome: string, raca: string) {
    super(nome, raca);
    this.raca = raca;
  }

  relinchar() {
    console.log(`${this.nome}, o cavalo da raça ${this.raca} relinchou!`);
  }
}

class Gato extends Animal {
  raca: string;

  constructor(nome: string, raca: string) {
    super(nome, raca);
    this.raca = raca;
  }

  miar() {
    console.log(`${this.nome}, o gato da raça ${this.raca} miou!`);
  }
}

const luffy = new Gato("Luffy", "vira-lata");
luffy.comer();
luffy.emitirBarulho();
luffy.miar();
