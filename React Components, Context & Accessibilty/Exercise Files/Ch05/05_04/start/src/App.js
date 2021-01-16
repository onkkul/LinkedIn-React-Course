import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <header>
        <h1>Hello World</h1>
        <nav></nav>
        <form role="search">
          <input type="search" name="search" aria-label="Search all content"/>
        </form>
      </header>
    );
  }
}

export default App;
