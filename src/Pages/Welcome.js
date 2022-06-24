import React from 'react'

import {Link} from 'react-router-dom'

function Welcome() {
  return (
    <div>
      <h1>Welcome to App</h1>
    <Link to='/register'>Click here to register</Link><br/>
    <Link to='/login'>Click here to login</Link>

    </div>
  )
}

export default Welcome