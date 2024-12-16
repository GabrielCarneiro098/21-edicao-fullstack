// class Item {
//   valor: number;
//   nome: string;
//   descricao: string;

//   constructor(valor: number, nome: string, descricao: string) {
//     this.valor = valor;
//     this.nome = nome;
//     this.descricao = descricao;
//   }
// }

// class Pedido {
//   itens: Item[] = [];
//   valorTotal: number = 0;

//   incluirItem(item: Item) {
//     this.valorTotal = 0;
//     this.itens.push(item);
//     this.itens.forEach((item) => {
//       this.valorTotal += item.valor;
//     });

//     console.log(`Valor total do pedido: R$${this.valorTotal.toFixed(2)}`);
//   }

//   mostrarPedido() {
//     console.log(this);
//   }
// }

// const cocaCola = new Item(3.0, "Coca-cola lata", "Bebida gaseificada");
// const pepsi = new Item(2.5, "Pepsi lata", "Bebida gaseificada");
// const guaravita = new Item(1.5, "Guaravita", "Suco de guaraná");

// const pedido1 = new Pedido();

// pedido1.incluirItem(cocaCola);
// pedido1.incluirItem(pepsi);
// pedido1.mostrarPedido();
