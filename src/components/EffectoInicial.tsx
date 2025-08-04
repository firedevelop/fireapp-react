import { useEffect } from "react";

export default function EffectoInicial(){
    useEffect(()=> {
        console.log('El compoenente se monto')

    }, [])
    return <p>Hola useEffect</p>
}

