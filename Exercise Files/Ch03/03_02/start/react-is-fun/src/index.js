import React from "react";
import ReactDOM from "react-dom"

class MessageComponent extends React.Component{
  render(){
    return (
      <div>
        <h1>Hello Everyone</h1>
        <h2>Following line will print sent data:</h2>
        <h3 style={{color:this.props.color}}>
          {this.props.msg} in {this.props.color} 
        </h3>
      </div>
    )
  }
}

ReactDOM.render(
  <MessageComponent msg="I have given a few inputs" color="red"/>,
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
