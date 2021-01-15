import React, { Component } from "react";
import ReactDOM from "react-dom"


let bookList = [
  {"title":"Vapurza", "Auther":"V. P. Kale"},
  {"title":"Batatyachi Chal", "Auther":"P. L. Deshpande"},
  {"title":"Yayati", "Auther":"V. S. Khandekar" },
]

const FunctionHiring = () => {
  return(
  <div>The Library is hiring</div>
  )
}

const FunctionNotHiring = () => {
  return (
    <div>The Library is not hiring</div>
  )
}

class BookComponent extends Component{
	render(){
    return(
      <div>
	    	<h1>{this.props.title}</h1>
    		<h2>{this.props.Auther}</h2>
        <h2>{this.props.freeFood? "Free food today":"Free Reading today"}</h2>
      </div>
    )
	}
}

class LibraryComponent extends Component{
  
  state = {
    isOpen:false,
    isFood:false,
    isHiring:true
  }

  changeState = () => {
    this.setState({
        isOpen : !this.state.isOpen,
        isFood : !this.state.isFood
      } )
  }

	render(){
    return(
      <div>
        <h1>The Library is {this.state.isOpen ? 'Open':'Closed'}</h1>,
			  {this.props.books.map(
          (book, indx) => <BookComponent key={indx} title={book.title} Auther={book.Auther} freeFood={this.state.isFood}/>
        )}
        <button onClick={this.changeState}> {this.state.isOpen ? 'Open':'Close'} Library </button>
        <h3> </h3>
        {this.state.isHiring? <FunctionHiring />: <FunctionNotHiring />}
  		</div>
    )
	}
}
ReactDOM.render(
  <LibraryComponent books={bookList}/>,
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
