import React, { memo, useState, useEffect } from 'react'

export const Empleados = memo(({page = 1, mensaje}) => {

    const [lista, setLista] = useState([])

    useEffect(()=>{
        usersFetch(page);
    },[page])

    useEffect(()=>{
        console.log("Lista de empleados actualizada");
    },[lista])

    const usersFetch = async(page) => {
        console.log("Haciendo fetch")
        const url = `https://reqres.in/api/users?page=${page}`;
        const req = await fetch(url);
        const {data:lista} = await req.json(); 
        setLista(lista);
    }

    mensaje();

  return (
    <div>
        <hr/>
        <span>Página {page}</span>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {   lista.length>=1 &&
                    lista.map((e)=>{
                            return <tr key={e.id}>
                                <td>{e.id}</td>
                                <td>{e.first_name} {e.last_name}</td>
                                <td>{e.email}</td>
                            </tr>                        
                    })
                }
            </tbody>
        </table>
    </div>
  )
})
