import { useState } from 'react'

export default function FormularioRegistro() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [enviado, setEnviado] = useState(false)

  const handleSubmit = () => {
    // podrías validar aquí si quieres
    setEnviado(true)
  }

  return (
    <div>
      {!enviado ? (
        <>
<input
  type="text" placeholder="Tu nombre"
  value={name} onChange={(e) => setName(e.target.value)} />
<input type="email" placeholder="Tu email"
value={email} onChange={(e) => setEmail(e.target.value)} /> 
          <button onClick={handleSubmit}>Enviar</button>
        </>
      ) : (
        <p>¡Gracias por registrarte, {name}!</p>
      )}
    </div>
  )
}
