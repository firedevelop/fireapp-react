import { useEffect, useState } from 'react'

export default function UseEffectDemo() {
  const [usuarios, setUsuarios] = useState([])

useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => setUsuarios(data))
    .catch((error) => console.error('Error al obtener usuarios:', error))
}, [])

  return (
    <div>
      <h2>Usuarios</h2>
<ul>
  {usuarios.map((usuario: any) => (
    <li key={usuario.id}>{usuario.name}</li>
  ))}
</ul>

    </div>
  )
}
