import React from 'react'
import { NavLink} from 'react-router-dom';

function SuccessfulLogin() {
  return (
    <div>
      <h3 style={{color:'green'}}>Successfully Logged In!!</h3>
    <NavLink activeClassName="active" to="expense">Click here to create a new expense</NavLink><br/>
    </div>

  )
}

export default SuccessfulLogin