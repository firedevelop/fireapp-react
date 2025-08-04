import { useEffect, useState } from 'react'

export default function ListaUsuariosConEstado() {
  const [usuarios, setUsuarios] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) throw new Error('Error en la respuesta')
        return res.json()
      })
      .then((data) => setUsuarios(data))
      .catch(() => setError(true))
      .finally(() => setCargando(false))
  }, [])

  if (cargando) return <p>⏳ Cargando usuarios...</p>
  if (error) return <p>❌ Ocurrió un error al cargar los usuarios</p>

  return (
    <ul>
      {usuarios.map((usuario: any) => (
        <li key={usuario.id}>{usuario.name}</li>
      ))}
    </ul>
  )
}
