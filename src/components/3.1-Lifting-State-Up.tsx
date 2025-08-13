import { useState } from "react";

function Counter({ count, onIncrement }) {
  return (
    <div>
      <p>Valor: {count}</p>
      <button onClick={onIncrement}>Incrementar</button>
    </div>
  );
}

export default function LiftingStateUp() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);

  return (
    <div>
      <Counter count={count} onIncrement={handleIncrement} />
      <Counter count={count} onIncrement={handleIncrement} />
    </div>
  );
}
