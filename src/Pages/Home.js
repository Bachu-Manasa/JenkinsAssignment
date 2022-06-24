import React from 'react'
import {Link,NavLink} from "react-router-dom";



function Home() {
  return (
      <div>
        <h2>Welcome to Wealth Management Application!</h2>
        <NavLink activeClassName="active" to="welcome">Welcome</NavLink>
        <br/>
        <NavLink activeClassName="active" to="register">Register</NavLink>
        <br/>
        <NavLink activeClassName="active" to="login">Login</NavLink>
        <br/>


       </div>

  )
}

export default Home