import React, { Component } from "react";
import ReactDOM from "react-dom"
import PropTypes from "prop-types";

const NowEating = (props) =>{
  return (
  <div>
    <h1>{props.meal}</h1>
    <h2>{props.side === "" ? "":props.side}</h2>
  </div>
  )
}
class Menu extends Component{
  constructor (props){
    super(props)
    this.state = {
      meal:"Rice Bowl"
    }
  }

  addSides = () => {
    this.setState(previousState => {
      return {"meal" : previousState.meal,
      "side":"salad"}}
      )
  }
  render(){
    return(
      <div>
        <NowEating meal={this.state.meal} side={this.state.side}/>,
        <button onClick={this.addSides}> Add side </button>
      </div>
    )
  }
}
ReactDOM.render(
  <Menu data="SomeData"/>,
  document.getElementById('root')
)