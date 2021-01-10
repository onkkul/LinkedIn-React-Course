import React from "react";
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

class CodeComponent extends React.Component{
  render(){
    return (
      <section>
        <div>
          <h1>Leet Code</h1>
          <h2> {this.props.leetCode.easy} </h2>
          <h2> {this.props.leetCode.medium} </h2>
          <h2> {this.props.leetCode.hard} </h2>
        </div>
        <div>
          <h1>Hacker Rank</h1>
          <h2> {this.props.hackerRank.easy} </h2>
          <h2> {this.props.hackerRank.medium} </h2>
          <h2> {this.props.hackerRank.hard} </h2>
        </div>
        <div>
          <h1>Code Chef</h1>
          <h2> {this.props.codeChef.easy} </h2>
          <h2> {this.props.codeChef.medium} </h2>
          <h2> {this.props.codeChef.hard} </h2>
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
