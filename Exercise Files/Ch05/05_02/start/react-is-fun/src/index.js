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
  constructor(props){
    super(props)
  }

  componentDidMount(){
    console.log("Component mounted")
  }

  componentDidUpdate(){
    console.log("Component updated")
  }

  componentDidCatch(){
    console.log("Component catched")
  }

	render(){
    return(
      <div>
	    	<h1>{this.props.title}</h1>
    		<h2>{this.props.Auther}</h2>
        <h2>{this.props.freeFood? "Free food today":"Free Reading today"}</h2>
      </div>
    )
  }

  componentWillUnmount(){
    console.log("Component will unmount")
  }
}

class LibraryComponent extends Component{
  
  state = {
    isOpen:false,
    isFood:false,
    isHiring:true,
    isLoading:false,
    data:[]
  }

  changeState = () => {
    this.setState({
        isOpen : !this.state.isOpen,
        isFood : !this.state.isFood
      } )
  }

  componentDidMount(){
    this.setState({isLoading:true})
    fetch("https://hplussport.com/api/products/order/price/sort/asc/qty/1")
      .then(data => data.json())
      .then(data => this.setState({data, isLoading:false}))

  }

	render(){
    return(
      <div>
        <h1>The Library is {this.state.isOpen ? 'Open':'Closed'}</h1>,
			  {this.props.books.map(
          (book, indx) => <BookComponent key={indx} title={book.title} Auther={book.Auther} freeFood={this.state.isFood}/>
        )}
        
        <div>
          {this.state.isLoading? "Loading":
            <div>
              {this.state.data.map(product =>{
                return(
                  <div>
                    <h3>Product of the week is:</h3>
                    <h3>{product.name}</h3>
                    <img alt="Bottled water" src={product.image} height={100}/>
                  </div>
                )
              })}
            </div>
          }
        </div>
        
        

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