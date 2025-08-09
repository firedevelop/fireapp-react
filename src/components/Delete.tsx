import {useEffect, useState} from 'react' 
type Character={
    id: number
    name: string
    name: string
}

export default function CharacterList(){
    const [characters, setCharacters] = useState<Character[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(()=> {
        fetch('https')
        .then((res)=> {if(!res.ok) throw new Error('error cargar') })
            return res.json()
    })
        .then((data) => setCharacters(data.results))
        .catch(()=> setError(true))    
        .finally(()=> setLoading(false))
    }, [])
if(loading) return <p>cargando personajes...</p>
if(error) return <p>error cargando datos</p>

return (
    <ul></ul>
)
