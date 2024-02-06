import React, { useState, useRef } from 'react'
import { Empleados } from './Empleados'

export const Gestion = () => {

    const [nombre, setNombre] = useState("");
    const gestorInput = useRef()

    const asign = e => {
        setNombre(gestorInput.current.value);
    }

    return (
        <div>
            <h1>Gestor: {nombre}</h1>
            <input type="text" ref={gestorInput} onChange={asign} />
            <h2>Listado de empleados:</h2>
            <Empleados />
        </div>
    )
}
