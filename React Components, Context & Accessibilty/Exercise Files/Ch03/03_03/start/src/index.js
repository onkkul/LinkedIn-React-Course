import React, { Component } from "react";
import ReactDOM from "react-dom"
import PropTypes from "prop-types";

class BasicComponentMembers extends Component{
  /* 
    These are some common methods and API's present in every component of react
  */

  /* -------------------- Basic Methods --------------------*/
  
  // sends a "REQUEST" to enqueue changes to the component state and 
  // tells React that this component and its children
  // need to be re-rendered with the updated state
  setState()

  // Calls render irrespective of other involved factors
  // Skips shouldComponentUpdate() and forcefully updates calling render()
  forceUpdate()

  /* -------------------- Class Properties --------------------*/
  defaultProps = { property:"set_default_value_here"}

  // set Default name of the component, usually never used
  displayName()

  /* -------------------- Instance Properties --------------------*/
  
  // Defines properties set by caller of this component
  props

  // Contains data specific to this component that may change over time
  state
}



class ComponentLifeCycle extends Component{
  /*  
    This document contains the LifeCycle of React Components 

    """ IN ORDER OF THEIR EXECUTION """
  */
  

  /* -------------------- Mounting Phase --------------------*/
  
  // before component is mounted
  constructor(props){   super(props)    }

  // invoked right after component is constructed
  // Probably wont need it
  static getDerivedStateFromProps()

  render()

  // right after component is mounted
  // load data here
  // make network request here
  componentDidMount()

  /* -------------------- Update Phase --------------------*/
  // invoked right after component received new props
  // Probably wont need it
  static getDerivedStateFromProps()

  // to decide if render() and componentDidMount() should be called
  shouldComponentUpdate()

  // to render the updated changes
  render()


  // right before the most recent render() is rendered
  getSnapshotBeforeUpdate()

  // right after the update
  componentDidUpdate()


  /* -------------------- Error Handling Phase --------------------*/
  
  // static method called during the “render” phase, 
  // so side-effects are not permitted. 
  // For those use cases, use componentDidCatch() instead.
  getDerivedStateFromError()
  
  // invoked after an error has been thrown by a descendant component.
  // called during the “commit” phase, 
  // so side-effects are permitted; should be used for things like logging errors
  componentDidCatch()


  /* -------------------- Unmount Phase --------------------*/
  // right before unmounting the component.
  // JS equivalent of finally()
  componentWillUnmount()



}

ReactDOM.render(
  <ComponentLifeCycle />,
  document.getElementById("root")
)