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
import EffectoInicial from './components/EffectoInicial'
import UseEffectDemo from './components/02.01-useEffect'
import MensajeConRetraso from './components/02.02-useEffectTimeout'
import ListaUsuariosConEstado from './components/02.03-useEffectLoadingError'
import CharacterList from './components/02.04-MiniProyecto/CharacterList'
import LiftingStateUp from './components/3.1-Lifting-State-Up'
import CustomHooks from './components/3.2-Custom-Hooks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <CustomHooks />
        <LiftingStateUp />
        {/* <CharacterList />
        <ListaUsuariosConEstado />
        <MensajeConRetraso />
        <UseEffectDemo />
        <EffectoInicial/>
        <FormularioRegistro />
        <Formulario />
        <Header />
        <Title />
        <Counter />
        <Welcome name="Manuel" />
        <ClickLogger />
        <Bienvenida mensaje="¡Bienvenido FireApp!"/> */}


        
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
