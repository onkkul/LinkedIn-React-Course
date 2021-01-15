import React, { Component } from "react";
import ReactDOM from "react-dom"
import PropTypes from "prop-types";


let data = [
  {"element":"First Element", id:"1"},
  {"element":"Second Element", id:"2"},
  {"element":"Third Element", id:"3"}
]
const Greetings = ({data}) => {
  return data.map(item =>{
    return (
      <li key={item.id}>{item.element}</li>
    )
  }  )
}

ReactDOM.render(
  <Greetings data={data}/>,
  document.getElementById('root')
)