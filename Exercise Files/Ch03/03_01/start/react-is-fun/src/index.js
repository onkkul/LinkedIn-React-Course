import React from "react";
import ReactDOM from "react-dom"

class MessageComponent extends React.Component{
  render(){
    return (
      <div>
        <h1>Hello Everyone</h1>
        <h2>This is react tutorial</h2>
      </div>
    )
  }
}

ReactDOM.render(
  <MessageComponent />,
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
