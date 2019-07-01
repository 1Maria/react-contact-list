import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Main />
        <Link to="/" >Contact List </Link>
        <Link to="/contact/1">Contact </Link>
        <Link to="/contact/0">Contact </Link>
        <Link to="/add-contact">Add cOnTaCt</Link>
      </div>
    );
  }
}

export default App;
