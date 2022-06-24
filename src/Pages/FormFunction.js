import React from 'react'
import SuccessfulRegister from './SuccessfulRegister'
import {useState} from 'react'
import {Alert} from 'react-bootstrap'
import './Form.css'
function FormFunction() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [fname,setFname] = useState("");
    const [lname,setLname] = useState("");
    const [flag,setFlag] = useState(false);
    const [login,setLogin] = useState(true);

    function handleSubmit(e){
        e.preventDefault();
        if(!email || !password || !fname || !lname){
            setFlag(true);
        }
        else{
            setFlag(false);
            localStorage.setItem("Email",JSON.stringify(email));
            localStorage.setItem("Password",JSON.stringify(password));
            console.log("Saved in local storage");
            setLogin(!login);
        }


    }
    function handleClick() {
        setLogin(!login);
    }

  return (


      <div class="center">
        {login ? (
          <form onSubmit={handleSubmit}>
              <h1>Register</h1>
              <div  >
              <div className='form-group'>
                  <label>E-Mail:</label>
                  <input type="email" className="form-control" onChange={(event)=> setEmail(event.target.value)}></input>
              </div>
              <div className='form-group'>
                  <label>Password:</label>
                  <input type="password" className="form-control" onChange={(event)=> setPassword(event.target.value)}></input>
              </div>
              <div className='form-group'>
                  <label>First Name:</label>
                  <input type="text" className="form-control" onChange={(event)=> setFname(event.target.value)}></input>
              </div>
              <div className='form-group'>
                  <label>Last Name:</label>
                  <input type="text" className="form-control" onChange={(event)=> setLname(event.target.value)}></input>
              </div><br/>
              <button type="submit" className="btn btn-primary">Sign Up</button>

              <p onClick={handleClick}>Already Registered {" " } login in?</p>
              </div>

              {flag && 
              (<Alert color="primary" variant="danger">
                  Please Fill Every Field
              </Alert>
              )
              }
          </form>
          ):(<SuccessfulRegister/>)}

      </div>
  )
}

export default FormFunction