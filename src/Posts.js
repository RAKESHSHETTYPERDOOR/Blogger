import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Posts=(props)=>{
    const [post,setPost]=useState([])

    useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response)=>{
          setPost(response.data)
      })
      .catch((err)=>{
         alert(err.message)
      })

    },[])

    return(
        <div class="container">
           <h1>User Posts:{post.length}</h1>
           <ul>
               {post.map((ele)=>{

                   return<li key={ele.id}><Link to={`/posts/${ele.id}`}>{ele.title}</Link></li>
               })}
           </ul>

        </div>
    )
}
export default Posts