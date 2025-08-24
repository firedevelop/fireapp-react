import React, { useState, memo } from "react";

// 🔹 Componente hijo optimizado con React.memo
const Hijo = memo(function Hijo({ valor }) {
  console.log("Renderizando hijo...");
  return <p>Valor del hijo: {valor}</p>;
});

export default function App() {
  const [contador, setContador] = useState(0);
  const [texto, setTexto] = useState("");

  return (
    <div>
      <h2>React.memo</h2>

      <button onClick={() => setContador(contador + 1)}>
        Incrementar contador
      </button>
      <p>Contador: {contador}</p>

      <input
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Escribe algo"
      />

      {/* El hijo solo se renderiza si "contador" cambia */}
      <Hijo valor={contador} />
    </div>
  );
}
