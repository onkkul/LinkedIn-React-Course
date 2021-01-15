import React, { Component } from "react";
import ReactDOM from "react-dom"
import PropTypes from "prop-types";

let array = [12, 13, 14]

const FunctionOutsideComponent = (params) => {
  return params
}

class NameOfComponent extends Component{
  constructor(props){
    super(props)
    this.functionUsingBind.bind(this) // no need of this if you use =>
    this.state = {
      arrayVariable : [],
      booleanVariable : false,
      stringVariable : "String"
    }
  }

  static defaultProps = {
    arrayVariable : ["Default_1", "Default_2"],
    booleanVariable : false,
    stringVariable : "Default String"
  }


  // basic functions (state functions)
  changeState = () => {
    this.setState(
      {stringVariable:"Change its value"}
      )
  }

  componentDidMount() {
    console.log("Component mounted")
    this.setState({arrayVariable:this.props.arrayVariable})
    return (  null  )
  }

  componentDidUpdate() {
    console.log("Component updated")
    return (  null  )
  }

  componentDidCatch() {
    console.log("Component catched")
    return (  null  )
  }

  componentWillUnmount() {
    console.log("Component will unmount")
    return (  null  )
  }


  // two ways to declare functions
  functionUsingBind (params) {
    return (  null  )
  }

  functionNotUsingBind = (params) => {
    return (null)
  }


  // main and necessary funciton
  render(){
    return (
      <div>
        <h1>This is a REACT.js template</h1>
        <ul>
          <li>{this.state.arrayVariable}</li>
          <li>{this.props.property2}</li>
          <li>{this.state.stringVariable}</li>
        </ul>
      </div>
    )
  }
}


NameOfComponent.propTypes = {
  arrayVariable: PropTypes.array,
  booleanVariable : PropTypes.bool,
  stringVariable : PropTypes.string
}

ReactDOM.render(
  <NameOfComponent arrayVariable={FunctionOutsideComponent(array)} property2="SomeOtherThing"/>,
  document.getElementById("root")
)
