import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ShowPost=(props)=>{

    
    const [user,setUser]=useState({})
    const [comment,setComment]=useState([])

    const {id}=props.match.params

    useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    .then((response)=>{
        setComment(response.data)
    })
    .catch((error)=>{
        alert(error.message)

    })
    },[id])
        
    
useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response)=>{
        setUser(response.data)
    })
    .catch((err)=>{
    alert(err.message)
    })
},[id])
    
    
return(
    <div class="container" style={{padding:'20px'}}>
     
        <h1>USERNAME:{user.name}</h1>
        <h4>POST WRITTEN BY THE USER</h4>
        <ul>
            {comment.map((ele)=>{
                return <li key={ele.id}><Link to={`/posts/${id}`}>{ele.title}</Link></li>
            })}
        </ul>
        

    </div>
)
}
export default ShowPost




            
           



