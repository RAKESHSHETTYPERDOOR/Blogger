import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Users=(props)=>{
    const [user,setUser]=useState([])
   
    useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
       setUser(response.data)
    })
    .catch((err)=>{
    alert(err.message)
    })
    },[])





    return(
        <div class="container">
            <h1>User List:{user.length}</h1>
            <ul>
                {user.map((ele,i)=>{
                    return <li key={i}><Link  to={`/users/${ele.id}`}>{ele.name}</Link></li>
                })}
            </ul>
            

        </div>
    )
}
export default Users