class ContaBancaria {
  private _numeroConta: string;
  private _saldo: number;

  constructor(numeroConta: string, saldoInicial: number = 0) {
    this._numeroConta = numeroConta;
    this._saldo = saldoInicial;
  }

  get numeroConta(): string {
    return this._numeroConta;
  }

  get saldo(): number {
    return this._saldo;
  }

  set saldo(novoSaldo: number) {
    if (novoSaldo < 0) {
      console.log("Saldo negativo");
      return;
    }
    this._saldo = novoSaldo;
  }
}

// const conta1 = new ContaBancaria("123");
// conta1.saldo = 44;
// console.log(conta1.saldo);

class ContaCorrente extends ContaBancaria {
  private _chequeEspecial: number;

  constructor(
    numeroConta: string,
    saldoInicial: number,
    chequeEspecial: number
  ) {
    super(numeroConta, saldoInicial);
    this._chequeEspecial = chequeEspecial;
  }

  get chequeEspecial() {
    return this._chequeEspecial;
  }

  set chequeEspecial(cheque: number) {
    if (cheque < 0) {
      console.log("Cheque negativo.");
      return;
    }
    this._chequeEspecial = cheque;
  }

  usarChequeEspecial(valor: number) {
    if (valor > this._chequeEspecial) {
      console.log("Esse valor excede o cheque");
      return;
    }
    this._chequeEspecial -= valor;
    console.log(`Sacado R$${valor.toFixed(2)} do cheque especial`);
  }
}

class ContaPoupanca extends ContaBancaria {
  constructor(numeroConta: string, saldoInicial: number) {
    super(numeroConta, saldoInicial);
  }

  calcularJuros(taxa: number) {
    const juros = (this.saldo * taxa) / 100;
    this.saldo += juros;
    console.log(`Juros de ${taxa}% calculados. Novo saldo: R$${this.saldo}`);
  }
}

// const conta1 = new ContaCorrente("123", 300, 9000);
// conta1.usarChequeEspecial(300);
// console.log(conta1.chequeEspecial);

// const conta2 = new ContaPoupanca("123", 500);
// conta2.calcularJuros(20);
