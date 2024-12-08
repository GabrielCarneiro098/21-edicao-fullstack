//Modelagem de Classes
//Exercicio 1
class Contador {
  contador: number;

  constructor(contadorInicial: number) {
    this.contador = contadorInicial;
  }

  zerar() {
    this.contador = 0;
  }

  incrementar() {
    this.contador++;
  }

  retornarValor() {
    console.log(this.contador);
  }
}

let contador = new Contador(2);

// contador.retornarValor();
// contador.zerar();
// contador.retornarValor();
// contador.incrementar();
// contador.retornarValor();

//Exercicio 2
class Bola {
  cor: string;
  circuferencia: number;
  material: string;

  constructor(cor: string, circuferencia: number, material: string) {
    this.cor = cor;
    this.circuferencia = circuferencia;
    this.material = material;
  }

  trocarCor(novaCor: string) {
    this.cor = novaCor;
  }

  mostarCor() {
    console.log(this.cor);
  }
}

let bola1 = new Bola("Vermelha", 10, "Borracha");

// bola1.mostarCor();
// console.log(bola1);
// bola1.trocarCor("Verde");
// console.log(bola1);
// bola1.mostarCor();

//Exercicio 3

class ContaCorrente {
  ID: string;
  nome: string;
  saldo: number;

  constructor(userID: string, nome: string, saldoInicial: number = 0) {
    this.ID = userID;
    this.nome = nome;
    this.saldo = saldoInicial;
  }

  alterarNome(novoNome: string) {
    this.nome = novoNome;
  }

  deposito(deposito: number) {
    this.saldo += deposito;
    console.log(`Saldo atualizado R$${this.saldo.toFixed(2)}.`);
  }

  saque(saque: number) {
    if (this.saldo < saque) {
      console.log(
        `Saldo insuficiente. Saldo disponível R$${this.saldo.toFixed(2)}.`
      );
    } else {
      this.saldo -= saque;
      console.log(
        `Saque: R$${saque.toFixed(2)}. Saldo disponível R$${this.saldo}`
      );
    }
  }
}

let contaGabriel = new ContaCorrente("098", "Gabriel Carneiro", 2000);

// console.log(contaGabriel);
// contaGabriel.deposito(50);
// console.log(contaGabriel);

//Exercicio 4

interface Operacao {
  operacao: string;
}

class Calculadora {
  contador: number;
  historico: Operacao[];

  constructor() {
    this.contador = 0;
    this.historico = [];
  }

  somar(valor: number) {
    const operacao: Operacao = {
      operacao: `${this.contador} + ${valor} = ${this.contador + valor}`,
    };

    this.contador += valor;

    this.historico.push(operacao);
  }

  multiplicar(multiplicador: number) {
    const operacao: Operacao = {
      operacao: `${this.contador} * ${multiplicador} = ${
        this.contador * multiplicador
      }`,
    };

    this.contador *= multiplicador;

    this.historico.push(operacao);
  }

  dividir(divisor: number) {
    const operacao: Operacao = {
      operacao: `${this.contador} / ${divisor} = ${this.contador / divisor}`,
    };

    this.contador /= divisor;

    this.historico.push(operacao);
  }

  diminuir(valor: number) {
    const operacao: Operacao = {
      operacao: `${this.contador} - ${valor} = ${this.contador - valor}`,
    };

    this.contador -= valor;

    this.historico.push(operacao);
  }

  exibirHistorico() {
    console.log(this.historico);
  }
}

let calculadora = new Calculadora();

// console.log(calculadora);
// calculadora.somar(2);
// console.log(calculadora);
// calculadora.multiplicar(2);
// console.log(calculadora);
// calculadora.dividir(1);
// console.log(calculadora);
// calculadora.diminuir(1);
// console.log(calculadora);
// calculadora.exibirHistorico();

//Exercicio 5

class BombaCombustivel {
  tipoCombustivel: string;
  valorLitro: number;
  quantidadeCombustivel: number;

  constructor(
    tipoCombustivel: string,
    quantidadeCombustivelInicial: number,
    valorInicial: number = 5.2
  ) {
    this.tipoCombustivel = tipoCombustivel;
    this.valorLitro = valorInicial;
    this.quantidadeCombustivel = quantidadeCombustivelInicial;
  }

  abasterPorValor(valor: number): void {
    const abastecimento = valor / this.valorLitro;
    console.log(abastecimento);

    if (this.quantidadeCombustivel < abastecimento) {
      console.log(
        `Não há combustivel suficiente. Combustivel restante: ${this.quantidadeCombustivel.toFixed(
          2
        )}L`
      );
    } else {
      this.quantidadeCombustivel -= abastecimento;

      console.log(
        `Valor pago: R$${valor.toFixed(
          2
        )}. Abastecido ${abastecimento} litros, combustivel restante: ${this.quantidadeCombustivel.toFixed(
          3
        )}L.`
      );
    }
  }

  abastecerPorLitro(litro: number): void {
    const valorPagar = litro * this.valorLitro;

    if (this.quantidadeCombustivel < litro) {
      console.log(
        `Não há combustivel suficiente. Combustivel restante: ${this.quantidadeCombustivel.toFixed(
          2
        )}L`
      );
    } else {
      this.quantidadeCombustivel - litro;
      console.log(
        `Abastecido: ${litro.toFixed(
          2
        )}L. Valor a pagar: R$${valorPagar.toFixed(2)}.`
      );
    }
  }

  alterarValor(novoValor: number): void {
    this.valorLitro = novoValor;
  }

  alterarCombustivel(novoCombustivel: string): void {
    this.tipoCombustivel = novoCombustivel;
  }

  alterarQuantidadeCombustivel(quantidadeCombustivel: number): void {
    this.quantidadeCombustivel = quantidadeCombustivel;
  }
}

let bomba1 = new BombaCombustivel("Gasolina", 100);

// bomba1.alterarCombustivel("Diesel");
// bomba1.alterarQuantidadeCombustivel(50.3);
// bomba1.alterarValor(6.5);
// bomba1.abastecerPorLitro(50.3);
// bomba1.abasterPorValor(10.2);

//Exercicio 6

class Carro {
  combustivel: number;
  consumo: number;

  constructor(consumo: number, combustivelInicial: number = 0) {
    this.combustivel = combustivelInicial;
    this.consumo = consumo;
  }

  andar(kilometro: number) {
    let consumoDeCombustivel = kilometro / this.consumo;

    if (consumoDeCombustivel > this.combustivel) {
      console.log(`Não há combústivel suficiente!`);
    } else {
      this.combustivel -= consumoDeCombustivel;
      console.log(
        `Distancia percorrida: ${kilometro.toFixed(
          2
        )}Km. Consumo de combustível: ${consumoDeCombustivel.toFixed(
          3
        )} L. Combustível restante: ${this.combustivel.toFixed(3)} L.`
      );
    }
  }

  obterGasolina(gasolina: number) {
    this.combustivel += gasolina;
    console.log(`Combustivel disponível: ${this.combustivel.toFixed(2)}L.`);
  }

  adicionarGasolina(litro: number) {
    this.combustivel += litro;
  }
}

let i30 = new Carro(9.6);

// i30.andar(2);
// i30.obterGasolina(2);
// i30.andar(10.2);
