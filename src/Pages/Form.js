import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap'
import { NavLink,useHistory,Link} from 'react-router-dom';
import SuccessfulRegister from './SuccessfulRegister';
import './Form.css'

class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
          email : "",
          password : "",
          firstName : "",
          lastName : ""
      }
      this.handleSignUp=this.handleSignUp.bind(this);
      
       }
      
    

    handlerEmailChange = (event) =>{
        this.setState({
            email: event.target.value
        })
    }

    handlerPasswordChange = (event) =>{
        this.setState({
            password: event.target.value
        })
    }

    handlerFirstNameChange = (event) =>{
        this.setState({
            firstName: event.target.value
        })
    }

    handlerLastNameChange = (event) =>{
        this.setState({
            lastName: event.target.value
        })
    }

    handleSignUp = (event) =>{
       alert(`${this.state.email} ${this.state.password} ${this.state.firstName} ${this.state.lastName} `)
        console.log(this.state);
        this.setState({
            email:"",
            password:"",
            firstName:"",
            lastName:""
        }) 
        event.preventDefault()
    }

  render() {
    const {email,password,firstName,lastName} = this.state
    return (

        <form onSubmit={this.handleSignUp}>
          <h1>User Registration-Sign Up</h1><br/>
          <div class="center">
            <form>
            
          <div class="col-auto">  
              <label class="col-form-label">E-Mail:</label>
              <input type="email" class="form-control" value={email} onChange={this.handlerEmailChange}/>
          </div>

            <div class="col-auto">  
              <label class="col-from-label">Password:</label>
              <input type="password" class="form-control" value={password} onChange={this.handlerPasswordChange}/>
            </div>

            <div class = "col-auto"> 
              <label class="from-label">First Name:</label>
              <input type="text" class="form-control" value={firstName} onChange={this.handlerFirstNameChange}/>
            </div>   

            <div class ="col-auto">
              <label class="from-label">Last Name:</label>
              <input type="text" class="form-control" value={lastName} onChange={this.handlerLastNameChange}/><br/>
            </div>

            <Link to="/sregister"> <button type="submit" class="btn btn-primary" onClick={()=>this.handleSignUp}>SignUp</button></Link>

            </form>
          </div>
          
    
            {/*<Link to="/sregister"><button type="submit" onClick={this.handleSignUp}>SignUp</button></Link>*/}
            

        </form>
        

    )
  }
}

export default Form