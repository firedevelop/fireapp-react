import { useEffect, useState } from 'react'

export default function MensajeConRetraso() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true)
    }, 3000)

    // Limpieza (opcional aquí, pero buena práctica)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      {visible ? <p>🎉 ¡Gracias por esperar 3 segundos!</p> : <p>⏳ Cargando...</p>}
    </div>
  )
}
