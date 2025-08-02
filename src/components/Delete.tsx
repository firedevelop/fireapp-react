import {useState} from 'react'
export default function Formulario(){
    const[name, setName]=useState('')

    return(
        <>
        <input type="text" placeholder="your name"
        value={name}
        onChange={(e)=> setName(e.target.value)}
        />
        <p>Name: {name}</p>
        </>
    )
}