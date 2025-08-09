import React, { useState } from "react";

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);
  const reset = () => setCount(initialValue);
  return { count, increment, decrement, reset };
}

export default function App() {
  const counter1 = useCounter(0);
  const counter2 = useCounter(10);

  return (
    <div>
      <h1>Custom Hooks</h1>
      <div>
        <p>Counter 1: {counter1.count}</p>
        <button onClick={counter1.increment}>+</button>
        <button onClick={counter1.decrement}>-</button>
        <button onClick={counter1.reset}>Reset</button>
      </div>
      <div>
        <p>Counter 2: {counter2.count}</p>
        <button onClick={counter2.increment}>+</button>
        <button onClick={counter2.decrement}>-</button>
        <button onClick={counter2.reset}>Reset</button>
      </div>
    </div>
  );
}
