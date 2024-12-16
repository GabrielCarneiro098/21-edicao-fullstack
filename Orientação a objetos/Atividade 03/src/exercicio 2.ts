class FormatoDeElemento {
  desenhar(): void {}
  redimencionar(): void {}
}

class Ciculo extends FormatoDeElemento {
  raio: number;

  constructor(raio: number) {
    super();
    this.raio = raio;
  }
}

class Retangulo extends FormatoDeElemento {
  comprimento: number;
  altura: number;

  constructor(comprimento: number, altura: number) {
    super();
    this.comprimento = comprimento;
    this.altura = altura;
  }
}
