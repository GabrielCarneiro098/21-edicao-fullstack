// class Restaurante {
//   nome: string;
//   tipo: string;
//   pedidos: Pedido[] = [];

//   constructor(nome: string, tipo: string) {
//     this.nome = nome;
//     this.tipo = tipo;
//   }

//   cadastrarPedido(pedido: Pedido): void {
//     this.pedidos.push(pedido);
//   }

//   listarPedidos(): void {
//     this.pedidos.forEach((pedido) => {
//       console.log(`Nome: ${pedido.nome}. Valor: R$${pedido.valor}`);
//     });
//   }
// }

// class Pedido {
//   nome: string;
//   valor: number;

//   constructor(nome: string, valor: number) {
//     this.nome = nome;
//     this.valor = valor;
//   }
// }

// const lanchoneteLosHermanos = new Restaurante("Los Hermanos", "Hamburgueria");

// const x_tudo = new Pedido("X-Tudo", 15.38);
// const x_bacon = new Pedido("X-Bacon", 12.29);
// const x_picanha = new Pedido("X-Picanha", 20.99);

// lanchoneteLosHermanos.cadastrarPedido(x_bacon);
// lanchoneteLosHermanos.cadastrarPedido(x_picanha);
// lanchoneteLosHermanos.cadastrarPedido(x_tudo);
// lanchoneteLosHermanos.cadastrarPedido(x_picanha);
// lanchoneteLosHermanos.listarPedidos();
