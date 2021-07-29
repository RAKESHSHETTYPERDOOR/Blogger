import React from "react";
import { Route,Link } from "react-router-dom";
import Home from "./Home";
import Users from "./Users";
import Posts from "./Posts";
import ShowPost from "./ShowPost";
import ShowComment from "./ShowComment";

const App=(props)=>{

  return(
    <div>

      <nav class="navbar navbar-expand-lg navbar-light bg-yellow" style={{background:"white",padding:'20px'}}>

        <div class="container">


        <h3 class="navbar-brand" href="#" key={1}><Link to='/home'>Home</Link></h3>  
        <h3  class="navbar-brand" href="#"><Link to='/user' key={2}>Users</Link></h3>
        <h3  class="navbar-brand" href="#"><Link to='/post' key={3}>Posts</Link></h3>




        </div>
      

    

      </nav>
       
      <Route path='/home' component={Home} exact={true}></Route>
        <Route path='/user' component={Users} exact={true}></Route>
        <Route path='/users/:id' component={ShowPost}></Route>
        
        <Route path='/post' component={Posts}></Route>
        <Route path='/posts/:userId' component={ShowComment}></Route>
    </div>
  )
}



export default App;
