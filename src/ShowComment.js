import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ShowComment=(props)=>{
  const {userId}=props.match.params

  const [user,setUser]=useState({})
  const [info,setInfo]=useState({})
  const [comment,setComment]=useState([])

  
            
            
useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${userId}`)
        .then((response)=>{
            setInfo(response.data)
        })
        .catch((err)=>{
        alert(err.message)
        })
    },[userId])

useEffect(()=>{
    if (info.userId){
    axios.get(`https://jsonplaceholder.typicode.com/users/${info.userId}`)
        .then((response)=>{
            setUser(response.data)
        })
        .catch((err)=>{
        alert(err.message)
        
    })
}
    },[info])    
  
useEffect(()=>{
axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${info.id}`)
    .then((response)=>{
        setComment(response.data)
    })
    .catch((err)=>{
    alert(err.message)
    })
},[info])
        

    return(
        <div class="container" style={{padding:'40px'}}>
            <h1>USERNAME-{user.name}</h1>  
            <h1 style={{padding:'10px'}}>TITLE:{info.title}</h1>
            <b>BODY:{info.body}</b>  <hr/>
            <h1>COMMENTS</h1>
            <ul>
                {comment.map((ele)=>{
                    return <li key={ele.id}>{ele.body}</li>
                })}
            </ul> <hr/>
            <p><Link to={`/users/${info.userId}`}>More Post Of Author-{user.name}</Link></p>


        </div>
    )
}
export default ShowComment



           
          
  



          
  
