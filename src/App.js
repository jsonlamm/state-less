import React, { Component } from 'react';

// import Spy1 from './components/Spy1';
import Spy2 from './components/Spy2';
import Organization from './components/Organization';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  // let state = {
  //   name: 'Anip Atalooc',
  //   age: 931,
  //   origin: '3rd moon'
  // }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          An example of React Context!
        </p>

        <Organization />

      </div>
    );
  }
}

export default App;
