import { useEffect, useState } from 'react'

type Character = {
  id: number
  name: string
  image: string
}

export default function CharacterList() {
  const [characters, setCharacters] = useState<Character[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => {
        if (!res.ok) throw new Error('Error al cargar personajes')
        return res.json()
      })
      .then((data) => setCharacters(data.results))
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <p>⏳ Cargando personajes...</p>
  if (error) return <p>❌ Error al cargar datos.</p>

  return (
    <ul>
      {characters.map((char) => (
        <li key={char.id}>
          <img src={char.image} alt={char.name} width={80} />
          <p>{char.name}</p>
        </li>
      ))}
    </ul>
  )
}
