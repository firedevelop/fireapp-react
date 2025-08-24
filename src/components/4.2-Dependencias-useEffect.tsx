import { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // Se ejecuta siempre que el componente se renderiza
  useEffect(() => {
    console.log("Render completo");
  });

  // Se ejecuta solo una vez al montar
  useEffect(() => {
    console.log("Componente montado");
  }, []);

  // Se ejecuta cada vez que cambia 'count'
  useEffect(() => {
    console.log("El count cambió:", count);
  }, [count]);

  return (
    <div>
      <h1>Dependencias en useEffect</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>

      <input
        placeholder="Escribe tu nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
