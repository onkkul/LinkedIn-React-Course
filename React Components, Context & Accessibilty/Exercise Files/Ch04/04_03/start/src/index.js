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
      <Context.Provider value={{
        state: this.state,
        changeStatus: () =>{   this.setState({isOpen:!this.state.isOpen})  }
        }}>
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
            <div>
              <ul>
                <li> Capacity: {context.state.capacity} </li>,
                <li> Location : {context.state.location} </li>
              </ul>
              <button onClick={context.changeStatus}>{context.state.isOpen === true? "Close Resort":'Open Resort'}</button>
            </div>
            
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
    this.state = { resortState:"Empty"    }
  }

  render(){
    return (
      <ContextProvider>
        <div>
          <Activities />
        </div>
      </ContextProvider>
    )
    // if (this.props.isOpen === true){
    //   return (<Activities capacity={this.state.capacity} location={this.state.location}/>)
    // }
    // else{
    //   return <h1>Resort is closed</h1>
    // }
  }
}

Resort.propTypes = {
  resortState:PropTypes.string,
}

ReactDOM.render(
  <div>
    <Resort isOpen={true}/>,
  </div>,
  document.getElementById('root')
)