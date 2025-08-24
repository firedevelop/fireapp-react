import { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  // useEffect se ejecuta después de cada render
  useEffect(() => {
    console.log("El componente se renderizó");
  });

  return (
    <div>
      <h1>useEffect básico</h1>
      <p>Has hecho clic {count} veces</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}
