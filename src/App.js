import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter:0
    }
  }
  // const [counter,setCounter] = useState(0);

  incrementCounter = () => {
    this.setState({counter:this.state.counter + 1});
  }

  decrementCounter = () => {
    if((this.state.counter - 1) < 0)
      document.getElementById('errorMessage').textContent = 'Counter cannot get below 0';
    else
      this.setState({counter:this.state.counter - 1});
  }

  render = () => {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">The counter is currently {this.state.counter}</h1>
        <button onClick={this.incrementCounter} data-test="increment-button">Increment Counter</button>
        <button onClick={this.decrementCounter} data-test="decrement-button">Decrement Counter</button>
        <span id="errorMessage" data-test="error-message-span" ref="">abcd</span>
      </div>
    );
  }
}

export default App;
