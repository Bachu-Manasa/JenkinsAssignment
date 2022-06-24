import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import {Link} from 'react-router-dom'

class SignIn extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         email:"",
         password:""
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
    return (
        
      <div class="center" >
          <h1>Please sign in</h1>
        <div class="col-auto">
          <label class="col-form-label">E-Mail:</label>
          <input type="email" class="form-control" value={this.state.email} onChange={this.handlerEmailChange} />
        </div>
        <div class="col-auto">
          <label class="col-form-label">Password:</label>
          <input type="password" class="form-control" value={this.state.password} onChange={this.handlerPasswordChange} />
        </div>
        <br/>
        <div class="col-auto">
          <Link to='/expense'> <button class="btn btn-primary" type="submit">Sign In</button></Link>
        </div>  

      </div>
    )
  }
}

export default SignIn