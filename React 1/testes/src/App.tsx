import { useState, useMemo } from "react";

const MeuComponente = () => {
  const [contador, setContador] = useState(0);
  const [multiplicador, setMultiplicador] = useState(1);

  // Cálculo pesado depende do multiplicador
  const valorCalculado = useMemo(() => {
    console.log("Recalculando com o multiplicador...");
    return contador * multiplicador;
  }, [contador, multiplicador]); // Recalcula apenas quando o multiplicador mudar

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <p>Resultado: {valorCalculado}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <button onClick={() => setMultiplicador(multiplicador + 1)}>
        Alterar Multiplicador
      </button>
    </div>
  );
};

export default MeuComponente;
