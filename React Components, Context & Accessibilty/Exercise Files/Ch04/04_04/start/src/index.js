import React, { Component } from "react";
import ReactDOM from "react-dom"
import PropTypes from "prop-types";

const DataComponent = ({ComposedComponent, url}) =>
  class DataComponent extends Component{
    constructor(props){
      super(props)
      this.state = {
        data : [],
        loading : false,
        loaded: false
      }
    }

    componentDidMount() {
      this.setState({loading: true})
      fetch(url)
        .then(response => response.json())
        .then(data =>
          this.setState({
            loaded: true,
            loading: false,
            data
          })
        )
    }

    render(){
      return (
        <div>
          {this.state.loaded  ? <div><ComposedComponent {...this.state} {...this.props}/></div>
                              : <div><h1>Loading</h1></div>}
        </div>
      )
    }
  }

const DisplayUser = ({data}) =>{
  <ol>
    {data.results.map((person, i) => {
      const {first, last} = person.name
      return (<li key={i}>{first} {last}</li>)
    })}
  </ol>
}


const RandomUser = DataComponent(DisplayUser, "https://randomuser.me/api?results=11") 
ReactDOM.render(
  <RandomUser />,
  document.getElementById("root")
)