import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import io from 'socket.io-client';

const socket = require('socket.io-client')('http://localhost:8080');
class App extends Component {
  componentDidMount() {
      socket.on('login', (data) => {
          console.log(data)
      });
      socket.on('add user', (data) => {
          console.log(data)
      });
      socket.on('new message', (data) => {
          console.log(data)
      });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
