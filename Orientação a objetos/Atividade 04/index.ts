abstract class Ingresso {
  valor: number;

  constructor(valor: number) {
    this.valor = valor;
  }

  imprimeValor(): void {
    console.log(`R$${this.valor}`);
  }
}

class Normal extends Ingresso {
  constructor(valorNormal: number) {
    super(valorNormal);
  }
}

class Vip extends Ingresso {
  texaVip: number;

  constructor(taxa: number, valorIngresso: number) {
    super(valorIngresso);
    this.texaVip = taxa;
  }

  imprimeValor(): void {
    console.log(
      `Valor do ingresso: R$${this.valor.toFixed(
        2
      )} + taxa: ${this.texaVip.toFixed(2)}. Valor total: R$${(
        this.valor + this.texaVip
      ).toFixed(2)}`
    );
  }
}

class Camarote extends Ingresso {
  texaAdicional: number;

  constructor(taxa: number, valorIngresso: number) {
    super(valorIngresso);
    this.texaAdicional = taxa;
  }

  imprimeValor(): void {
    console.log(
      `Valor do ingresso: R$${this.valor.toFixed(
        2
      )} + taxa: ${this.texaAdicional.toFixed(2)}. Valor total: R$${(
        this.valor + this.texaAdicional
      ).toFixed(2)}`
    );
  }
}

const teste = new Camarote(15, 20);

//Exercicio 2

class Imovel {
  enedereco: string;
  preco: number;

  constructor(endereco: string, preco: number) {
    this.enedereco = endereco;
    this.preco = preco;
  }
}

class Novo extends Imovel {
  adicional: number;

  constructor(endereco: string, preco: number, adicional: number) {
    super(endereco, preco);
    this.adicional = adicional;
  }

  mostrarValor(): void {
    console.log(`Valor original: R$${this.preco.toFixed(2)}`);
    console.log(`Valor adiconal: R$${this.adicional.toFixed(2)}`);
    console.log(`Total: R$${(this.preco + this.adicional).toFixed(2)}`);
  }
}

class Velho extends Imovel {
  desconto: number;

  constructor(endereco: string, preco: number, desconto: number) {
    super(endereco, preco);
    this.desconto = desconto;
  }

  mostrarValor(): void {
    console.log(`Valor original: R$${this.preco.toFixed(2)}`);
    console.log(`Valor de desconto: R$${this.desconto.toFixed(2)}`);
    console.log(`Total: R$${(this.preco - this.desconto).toFixed(2)}`);
  }
}

//Atividade 3

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
//   luffy.comer();
//   luffy.emitirBarulho();
//   luffy.miar();
