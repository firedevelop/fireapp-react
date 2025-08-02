import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Title from './components/Title'
import Welcome from './components/Welcome'
import Counter from './components/Counter'
import ClickLogger from './components/ClickLogger'
import Bienvenida from './components/Bienvenida'
import Formulario from './components/Formulario'
import FormularioRegistro from './components/FormularioRegistro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <FormularioRegistro />
        <Formulario />
        <Header />
        <Title />
        <Counter />
        <Welcome name="Manuel" />
        <ClickLogger />
        <Bienvenida mensaje="¡Bienvenido FireApp!"/>


        
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
