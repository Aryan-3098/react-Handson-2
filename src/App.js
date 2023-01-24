import React, { Component } from 'react'
import './App.css';

export default class App extends Component {
  state={
    Name:"",
    Department:"",
    Rating:"",
    employees:[]
  }
  changeHandler=(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }
  onSubmit=(e)=>{
    console.log(e.target);
    e.preventDefault();
  }
  render() {
    return (
      <div className='container'>
        <div className='shape shapeA'>
        </div>
        <div className='shape shapeB'>
        </div>
        <div className='shapeC'>
        </div>
        <form action='#'>
          <label htmlFor='Name'>Name :</label>
          <br/>
          <input type="text" name="Name" value={this.state.Name} placeeholder="Enter Your Name" onChange={this.changeHandler}></input>
          <br/>
          <label htmlFor="Department">Department:</label>
          <br/>
          <input type="text" name="Department" value={this.state.Department} placeholder="Enter your Department" onChange={this.changeHandler}></input>
          <br/>
          <label htmlFor="Rating">Rating:</label><br/>
          <input type="number" name="Rating" value={this.state.Rating} placeholder="Give your Rating" onChange={this.changeHandler}></input>
          <br/>
          <br/>
          <button type='submit' onClick={this.onSubmit}>Submit</button>
        </form>
        <div className='data'>
          {this.state.employees.map((value,index,array)=>{
            return(
              <span key={index}>{value.Name}&nbsp;&nbsp;{value.Department}&nbsp;&nbsp;{value.Rating}&nbsp;&nbsp;</span>
            )
          }
          )}
        </div>
      </div>
    )
  }
}


