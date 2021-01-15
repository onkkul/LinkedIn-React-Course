import React, { Component } from "react";
import ReactDOM from "react-dom"
import PropTypes from "prop-types";

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
  <FormComponent />,
  document.getElementById('root')
)