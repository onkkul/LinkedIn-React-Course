import React, { Component } from "react";
import ReactDOM from "react-dom"

let leetCode = {
  easy:50,
  medium:20,
  hard:10
}

let hackerRank = {
  easy:100,
  medium:30,
  hard:1
}

let codeChef = {
  easy:135,
  medium:56,
  hard:3
}

class CodeComponent extends Component{
  getPercentage = parameter_1 =>{
    return parameter_1*100/300 + "%"
  }
  render(){
    const {leetCode, hackerRank, codeChef} = this.props
    return (
      <section>
        <div>
          <h1>Leet Code</h1>
          <h2> {leetCode.easy} </h2>
          <h2> {leetCode.medium} </h2>
          <h2> {leetCode.hard} </h2>
        </div>
        <div>
          <h1>Hacker Rank</h1>
          <h2> {hackerRank.easy} </h2>
          <h2> {hackerRank.medium} </h2>
          <h2> {hackerRank.hard} </h2>
        </div>
        <div>
          <h1>Code Chef</h1>
          <h2> {codeChef.easy} </h2>
          <h2> {codeChef.medium} </h2>
          <h2> {codeChef.hard} </h2>
        </div>
        <div>
          <h1>Total percantage:</h1>
          <h2>{this.getPercentage(leetCode.easy)}</h2>
        </div>
      </section>
    )
  }
}

ReactDOM.render(
  <CodeComponent leetCode={leetCode} hackerRank={hackerRank} codeChef={codeChef}/>,
  document.getElementById("root")
)



// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
