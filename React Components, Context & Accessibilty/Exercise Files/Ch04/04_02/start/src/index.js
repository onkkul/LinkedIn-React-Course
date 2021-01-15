import React, { Component } from "react";
import ReactDOM from "react-dom"
import PropTypes from "prop-types";

const Context = React.createContext()

class ContextProvider extends Component{
  constructor(props){
    super(props)
    this.state = {
      isOpen: true,
      capacity: 30,
      location: "Near Me"
    }
  }
  render(){
    return(
      <Context.Provider value={{state: this.state}}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

class Skii extends Component{
  render(){
    return (
      <div>
        <Context.Consumer>
          {(context) => (
            <ul>
              <li> Capacity: {context.state.capacity} </li>,
              <li> Location : {context.state.location} </li>
            </ul>
          )}
        </Context.Consumer>
      </div>
    )
  }
}
class Activities extends Component{
  render(){
    return (
      <div>
        <Skii/>
      </div>
    )
  }
}


class Resort extends Component{
  constructor(props){
    super(props)
    this.state = {
      isOpen: true,
      capacity: 30,
      location: "Near Me"
    }
  }

  render(){
    return (
      <ContextProvider>
        <div>
          <Activities />
        </div>
      </ContextProvider>
    )
  }
}

Resort.propTypes = {
  isOpen : PropTypes.bool,
  capacity: PropTypes.number,
  location:PropTypes.string,
}

ReactDOM.render(
  <div>
    <Resort isOpen={true}/>,
  </div>,
  document.getElementById('root')
)