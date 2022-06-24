import React from 'react'
import SuccessfulLogin from './SuccessfulLogin';
import {useState} from 'react'
import {Alert} from 'react-bootstrap'


function LoginFunction() {

    const[emaillogin,setEmaillogin]=useState("");
    const[passwordlogin,setPasswordlogin]=useState("");
    const[flag,setFlag]=useState(false);
    const[slogin,setSlogin]=useState(true);

    function handleLogin(e) {
        e.preventDefault();
        let email=localStorage.getItem("Email").replace(/"/g,"");
        let password=localStorage.getItem("Password").replace(/"/g,"");

        if(!emaillogin || !passwordlogin){
            setFlag(true);
            console.log("Empty");
        }
        else if(passwordlogin!==password || emaillogin!==email){
            setFlag(true);

        }
        else{
            setSlogin(!slogin);
            setFlag(false);
        }

    }

  return (
    <div class="center">

        {slogin ? (
        <form onSubmit={handleLogin} >
              <h1>Login</h1>
              <div> 
              <div className='form-group'>
                  <label>E-Mail:</label>
                  <input type="email" className="form-control" onChange={(event)=> setEmaillogin(event.target.value)}></input>
              </div>
              <div className='form-group'>
                  <label>Password:</label>
                  <input type="password" className="form-control" onChange={(event)=> setPasswordlogin(event.target.value)}></input>
              </div>
              <br/>
              <button type="submit" className="btn btn-primary">Login</button>
              </div>

              {flag && 
              (<Alert color="primary" variant="danger">
                  Please Fill Correct Information
              </Alert>
              )
              }
        </form>
        ):(
            <SuccessfulLogin/>
        )}
    </div>
  )
}

export default LoginFunction