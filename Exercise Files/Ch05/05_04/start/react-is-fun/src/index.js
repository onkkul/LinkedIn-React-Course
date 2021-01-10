import React, { Component } from "react";
import ReactDOM from "react-dom"

class ComponentFormFavColor extends Component{
  
  state = { pickedColor: ''}

  changeColor = (inpt) => {
    this.setState({pickedColor:inpt.target.value})
  }

  submit = (inpt) =>{
    
    return(
      inpt.preventDefault(),
      <h1> You picked: {this.state.pickedColor}</h1>
      console.log(this.state.pickedColor)
    )
  }

  render(){
    return(
      <div>
        <form onSubmit={this.submit}>
          <label> Fav Color 
            <input type="color" onChange={this.changeColor}/>
          </label>
          <button > Submit </button>
        </form>
      </div>
      
    )
  }
}


ReactDOM.render(
  <ComponentFormFavColor />,
  document.getElementById('root')
)