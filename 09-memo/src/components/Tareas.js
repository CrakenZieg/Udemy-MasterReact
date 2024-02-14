import React, { useMemo, useState } from 'react'

export const Tareas = () => {

    const [ tareas, setTareas ] = useState([]);
    const [ contador, setContador ] = useState(0);
    
    const guardarTareas = e => {
        e.preventDefault();
        setTareas(tarea => [...tarea, e.target.descripcion.value]);
    }
    
    const borrar = (index) => {
        let filtrado = tareas.filter((item , i)=> index !== i);
        setTareas(filtrado);
    }
    
    const contar = e => {
        setContador(contador + 1);
    }
    
    const contadoresViejos = (acumulado) => {
        for(let i = 0; i <= acumulado; i++){
            console.log("Contando...");
        }
        return `Tareas pendientes: ${acumulado}`;
    }
    
    const memoContadores = useMemo(()=> contadoresViejos(contador),[contador]); 

  return (
    <div className='tareas-container'>
        <h1>Tareas</h1>
        <form onSubmit={guardarTareas}>
            <input type="text" name="descripcion" placeholder="Descripción de la tarea" />
            <input type="submit" value="Agregar"/>
        </form>

        <h3>{memoContadores}</h3>
        <button onClick={contar}> + </button>

        <h3>Lista de Tareas:</h3>
        <ul>
            {
                tareas.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={()=>borrar(index)}> x </button>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}
