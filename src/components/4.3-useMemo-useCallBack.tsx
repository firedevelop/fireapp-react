import React, { useState, useMemo, useCallback } from "react";

const nombres = ["Ana", "Luis", "Luna", "Carlos", "Lucía", "María"];

function FiltroNombres() {
  const [busqueda, setBusqueda] = useState("");
  const [contador, setContador] = useState(0);

  // 🔹 useMemo: solo recalcula cuando cambia "busqueda"
  const resultados = useMemo(() => {
    console.log("Filtrando...");
    return nombres.filter((n) =>
      n.toLowerCase().includes(busqueda.toLowerCase())
    );
  }, [busqueda]);

  // 🔹 useCallback: memoriza la función
  const incrementar = useCallback(() => {
    setContador((c) => c + 1);
  }, []);

  return (
    <div>
      <h2>useMemo y useCallback</h2>
      <input
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder="Buscar nombre"
      />
      <ul>
        {resultados.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>

      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default FiltroNombres;
