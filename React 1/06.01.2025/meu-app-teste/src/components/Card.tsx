import "./Card.css";

interface CardProps {
  titulo: string;
  descricao: string;
  valor: string;
  funcaoCard: () => void;
}

function Card(CardProps: CardProps) {
  return (
    <div className="card">
      <h1>{CardProps.titulo}</h1>
      <p>{CardProps.descricao}</p>
      <p>{CardProps.valor}</p>
      <button onClick={CardProps.funcaoCard}>Comprar</button>
    </div>
  );
}

export default Card;
