import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Form.css'

export class Expense extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         id:"",
         date:"",
         description:"",
         location:"",
         category:""
      }
    }

    handlerIdChange = (event) =>{
        this.setState({
            id: event.target.value
        })
    }

    handlerDateChange = (event) =>{
        this.setState({
            date: event.target.value
        })
    }

    handlerDescriptionChange = (event) =>{
        this.setState({
            description: event.target.value
        })
    }

    handlerLocationChange = (event) =>{
        this.setState({
            location: event.target.value
        })
    }

    handlerCategoryChange = (event) =>{
        this.setState({
            category: event.target.value
        })
    }

    handleSave = (event) =>{
        alert(`${this.state.id} ${this.state.date} ${this.state.description} ${this.state.location}  ${this.state.category}`)
         console.log(this.state);
         this.setState({
             id:"",
             date:"",
             description:"",
             location:"",
             category:""
         }) 
         event.preventDefault()
     }
  render() {
    return (
      <div class="center" >
          <h1>Create New Expense</h1>
          <form onSubmit={this.handleSave}>
            <div className='form-group'>
            <label>Expense ID:</label>
            <input type="text" className="form-control" value={this.state.id} onChange={this.handlerIdChange} />
            </div>
            <div className='form-group'>
            <label>Expense Date:</label>
            <input type="date" className="form-control" value={this.state.date} onChange={this.handlerDateChange} />
            </div>
            <div className='form-group'>
            <label>Description:</label>
            <input type="text" className="form-control" value={this.state.description} onChange={this.handlerDescriptionChange} />
            </div>
            <div className='form-group'>

            <label>Location:</label>
            <input type="text" className="form-control" value={this.state.location} onChange={this.handlerLocationChange} />
            </div>
 
            <div className='form-group'>
            <label>Category:</label>
            <input type="text" className="form-control" value={this.state.category} onChange={this.handlerCategoryChange} /><br/>
            </div>

            <button type="submit" className="btn btn-primary" onClick={() => this.handleSave}>Save</button>

          </form>
      </div>
    )
  }
}

export default Expense