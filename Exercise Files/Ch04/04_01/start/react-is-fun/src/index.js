import React, { Component } from "react";
import ReactDOM from "react-dom"

class BookComponent extends Component{
	render(){
    return(
      <div>
	    	<h1>{this.props.title}</h1>
    		<h2>{this.props.Auther}</h2>
      </div>
    )
	}
}

class LibraryComponent extends Component{
	render(){
    return(
      <div>
			  <BookComponent title="Vapurza" Auther="V. P. Kale" />,
		  	<BookComponent title="Batatyachi Chal" Auther="P. L. Deshpande" />,
	  		<BookComponent title="Yayati" Auther="V. S. Khandekar" />,
  		</div>
    )
	}
}
ReactDOM.render(
  <LibraryComponent />,
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
