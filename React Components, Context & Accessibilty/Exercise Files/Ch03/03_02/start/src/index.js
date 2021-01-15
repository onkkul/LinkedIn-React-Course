import React, { Component } from "react";
import ReactDOM from "react-dom"
import PropTypes from "prop-types";

let Description = [
  {id:1, Error: "Syntax Erros", meaning : "Errors Due to improper grammer of language"},
  {id:2, Error: "Runtime Errors", meaning : "Errors due to improper bonding of variable to memory"},
  {id:3, Error: "Compilation Error", meaning :"Errors due to failure in compiling the program"}
]

const NavigationComponent = () => {
    return(
      <React.Fragment>
        <a href="/">Home</a>,
        <a href="/services">Services</a>,
        <a href="/about">About</a>,
        <a href="/contact">Contact</a>,
      </React.Fragment>
    )
}

const DescriptionComponent = (props) => {
  return (
    <dl >
      {props.Description.map(element =>(
        <React.Fragment key = {element.id}>
          <dt> {element.Error} </dt>
          <dd> {element.meaning}</dd>
        </React.Fragment>
       ) )  }
    </dl>
  )  
}


class WebsiteComponent extends Component{
  constructor (props){
    super(props)
    this.state = {
      property_1: "This is a custom property"
    }
  }
  render(){
    return(
      <DescriptionComponent Description={Description}/>
      
    )
  }
}


class FormComponent extends Component{
  constructor(props){
    super(props)
    this.state = {
      message : "The Default Message"
    }
  }

  handleChange = event => {
    this.setState (  {message:event.target.value}  )

  }
  handleSubmit = e => {
    alert(this.state.message)
    e.preventDefault()
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter a message to send:
          <input type="text" value={this.state.message} onChange={this.handleChange}/>,
        </label>

        <button>
          Send the message
        </button>
      </form>
    )
  }
}

ReactDOM.render(
  <WebsiteComponent />,
  document.getElementById('root')
)