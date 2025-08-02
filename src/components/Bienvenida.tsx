import {useState} from 'react'
export default function Bienvenida({ mensaje }: { mensaje: string }){
    const [mostrar, setMostrar] = useState(false);
    
    return (
        <div>
            
            <button onClick={() => setMostrar(!mostrar)}>
                {mostrar ? 'Ocultar Mensaje' : 'Mostrar Mensaje'}
            </button>
            {mostrar && <p>Mensaje: {mensaje}</p>}
        </div>
    )
}