"use strict";
class ContaBancaria {
    constructor(numeroConta, saldoInicial = 0) {
        this._numeroConta = numeroConta;
        this._saldo = saldoInicial;
    }
    get numeroConta() {
        return this._numeroConta;
    }
    get saldo() {
        return this._saldo;
    }
    set saldo(novoSaldo) {
        if (novoSaldo < 0) {
            console.log("Saldo negativo");
            return;
        }
        this.saldo = novoSaldo;
    }
}
const conta1 = new ContaBancaria("123", 3);
conta1.numeroConta;
