import React, { Component } from 'react';
import Calculator from './components/Calculator.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Calculator />;
  }
}
export default App;
