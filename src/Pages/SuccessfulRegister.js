import React from 'react'
import {NavLink} from "react-router-dom";

function SuccessfulRegister() {
  return (

    <div>
        <h3 style={{color:'green'}}>Successfully Registered!!</h3>
        <NavLink activeClassName="active" to="login">Click here to login</NavLink>
    </div>

  )
}

export default SuccessfulRegister