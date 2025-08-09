import React, { useState } from "react";

function Counter({ count, onIncrement }) {
  return (
    <div>
      <p>Valor: {count}</p>
      <button onClick={onIncrement}>Incrementar</button>
    </div>
  );
}

export default function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);

  return (
    <div>
      <h1>Lifting State Up</h1>
      <Counter count={count} onIncrement={handleIncrement} />
      <Counter count={count} onIncrement={handleIncrement} />
    </div>
  );
}
