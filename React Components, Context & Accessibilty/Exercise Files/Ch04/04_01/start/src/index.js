import React, { Component } from "react";
import ReactDOM from "react-dom"
import PropTypes from "prop-types";


class Activities extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <ul>
        <li> Capacity: {this.props.capacity} </li>,
        <li> Location : {this.props.location} </li>
      </ul>
    )
  }
}
class Resort extends Component{
  constructor(props){
    super(props)
  }

  state = {
    isOpen: true,
    capacity: 30,
    location: "Near Me"
  }

  render(){
    if (this.props.isOpen === true){
      return (<Activities capacity={this.state.capacity} location={this.state.location}/>)
    }
    else{
      return <h1>Resort is closed</h1>
    }
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