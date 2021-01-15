import React, { Component } from "react";
import ReactDOM from "react-dom"
import PropTypes from "prop-types";

const IsElegible = (age) =>{
  return age >= 18 ? true: false
}

class Display extends Component{
  render(props){
    return(
      this.props.isEligible === true ? 
        React.Children.only(this.props.children):
        null
    )
  }
}

ReactDOM.render(
  <Display isEligible={IsElegible(20)}>
    <h1>You can vote </h1>
  </Display>,
  document.getElementById('root')
)