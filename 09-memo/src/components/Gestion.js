import React, { useState, useRef, useEffect, useCallback } from 'react'
import { Empleados } from './Empleados'
import { Tareas } from './Tareas'


export const Gestion = () => {

    const [nombre, setNombre] = useState("");
    const gestorInput = useRef();
    const [page, setPage] = useState(1);

    const asign = e => {
        setNombre(gestorInput.current.value);
    }

    useEffect(()=>{
        console.log("Vista de gestión actualizada");
    },[nombre, page]);

    
    const mensaje = useCallback(() => {
        console.log("mensaje!");
    },[page]);

    return (
        <div className='gestion'>
            <h1>Gestor: {nombre}</h1>
            <input type="text" ref={gestorInput} onChange={asign} />
            <h2>Listado de empleados:</h2>
            <button onClick={()=>{setPage(1)}}>1</button>
            <button onClick={()=>{setPage(2)}}>2</button>
            <Empleados page={page} mensaje={mensaje} />
            <Tareas/>
        </div>
    )
}
