import React, { Component } from "react";
import ReactDOM from "react-dom"
import PropTypes from "prop-types";

class FormComponent extends Component{
  handleSubmit = e => {
    alert(this.input.value)
    e.preventDefault()
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter a message to send:
          <input type="text" ref={input => this.input = input} />,
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