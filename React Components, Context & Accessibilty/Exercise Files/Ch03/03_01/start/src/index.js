import React, { Component } from "react";
import ReactDOM from "react-dom"
import PropTypes from "prop-types";


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
class WebsiteComponent extends Component{
  constructor (props){
    super(props)
    this.state = {
      property_1: "This is a custom property"
    }
  }

  render(){
    return(
      <header>
        <nav>   <NavigationComponent />   </nav>   
      </header>
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