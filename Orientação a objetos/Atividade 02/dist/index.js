"use strict";
//Modelagem de Classes
//Exercicio 1
class Contador {
    constructor(contadorInicial) {
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
    constructor(cor, circuferencia, material) {
        this.cor = cor;
        this.circuferencia = circuferencia;
        this.material = material;
    }
    trocarCor(novaCor) {
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
    constructor(userID, nome, saldoInicial = 0) {
        this.ID = userID;
        this.nome = nome;
        this.saldo = saldoInicial;
    }
    alterarNome(novoNome) {
        this.nome = novoNome;
    }
    deposito(deposito) {
        this.saldo += deposito;
        console.log(`Saldo atualizado R$${this.saldo.toFixed(2)}.`);
    }
    saque(saque) {
        if (this.saldo < saque) {
            console.log(`Saldo insuficiente. Saldo disponível R$${this.saldo.toFixed(2)}.`);
        }
        else {
            this.saldo -= saque;
            console.log(`Saque: R$${saque.toFixed(2)}. Saldo disponível R$${this.saldo}`);
        }
    }
}
let contaGabriel = new ContaCorrente("098", "Gabriel Carneiro", 2000);
class Calculadora {
    constructor() {
        this.contador = 0;
        this.historico = [];
    }
    somar(valor) {
        const operacao = {
            operacao: `${this.contador} + ${valor} = ${this.contador + valor}`,
        };
        this.contador += valor;
        this.historico.push(operacao);
    }
    multiplicar(multiplicador) {
        const operacao = {
            operacao: `${this.contador} * ${multiplicador} = ${this.contador * multiplicador}`,
        };
        this.contador *= multiplicador;
        this.historico.push(operacao);
    }
    dividir(divisor) {
        const operacao = {
            operacao: `${this.contador} / ${divisor} = ${this.contador / divisor}`,
        };
        this.contador /= divisor;
        this.historico.push(operacao);
    }
    diminuir(valor) {
        const operacao = {
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
    constructor(tipoCombustivel, quantidadeCombustivelInicial, valorInicial = 5.2) {
        this.tipoCombustivel = tipoCombustivel;
        this.valorLitro = valorInicial;
        this.quantidadeCombustivel = quantidadeCombustivelInicial;
    }
    abasterPorValor(valor) {
        const abastecimento = valor / this.valorLitro;
        console.log(abastecimento);
        if (this.quantidadeCombustivel < abastecimento) {
            console.log(`Não há combustivel suficiente. Combustivel restante: ${this.quantidadeCombustivel.toFixed(2)}L`);
        }
        else {
            this.quantidadeCombustivel -= abastecimento;
            console.log(`Valor pago: R$${valor.toFixed(2)}. Abastecido ${abastecimento} litros, combustivel restante: ${this.quantidadeCombustivel.toFixed(3)}L.`);
        }
    }
    abastecerPorLitro(litro) {
        const valorPagar = litro * this.valorLitro;
        if (this.quantidadeCombustivel < litro) {
            console.log(`Não há combustivel suficiente. Combustivel restante: ${this.quantidadeCombustivel.toFixed(2)}L`);
        }
        else {
            this.quantidadeCombustivel - litro;
            console.log(`Abastecido: ${litro.toFixed(2)}L. Valor a pagar: R$${valorPagar.toFixed(2)}.`);
        }
    }
    alterarValor(novoValor) {
        this.valorLitro = novoValor;
    }
    alterarCombustivel(novoCombustivel) {
        this.tipoCombustivel = novoCombustivel;
    }
    alterarQuantidadeCombustivel(quantidadeCombustivel) {
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
    constructor(consumo, combustivelInicial = 0) {
        this.combustivel = combustivelInicial;
        this.consumo = consumo;
    }
    andar(kilometro) {
        let consumoDeCombustivel = kilometro / this.consumo;
        if (consumoDeCombustivel > this.combustivel) {
            console.log(`Não há combústivel suficiente!`);
        }
        else {
            this.combustivel -= consumoDeCombustivel;
            console.log(`Distancia percorrida: ${kilometro.toFixed(2)}Km. Consumo de combustível: ${consumoDeCombustivel.toFixed(3)} L. Combustível restante: ${this.combustivel.toFixed(3)} L.`);
        }
    }
    obterGasolina(gasolina) {
        this.combustivel += gasolina;
        console.log(`Combustivel disponível: ${this.combustivel.toFixed(2)}L.`);
    }
    adicionarGasolina(litro) {
        this.combustivel += litro;
    }
}
let i30 = new Carro(9.6);
i30.andar(2);
i30.obterGasolina(2);
i30.andar(10.2);
