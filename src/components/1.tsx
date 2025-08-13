import {useState} from 'react'
function useCounter(initialValue=0){
  const [count, setCount] = useState(initialValue)
  const increment = ()=> setCount((c)=> c+1)
  const decrement = ()=> setCount((c)=> c-1)
  const reset = ()=> setCount(initialValue)
  return {count, increment, decrement, reset}
}

export default function CustomHooks(){
  const counter1 = useCounter(0)
  const counter2 = useCounter(10)

  return (
    <div>
      <p>counter 1: {counter1.count}</p>
      <button onClick={counter1.increment}>+</button>
      <button onClick={counter1.decrement}>-</button>
      <button onClick={counter1.reset}>reset</button>

      <p>counter2: {counter2.count}</p>
      <button onClick={counter2.increment}>+</button>
      <button onClick={counter2.decrement}>-</button>
      <button onClick={counter2.reset}>reset</button>
    </div>
  )
}