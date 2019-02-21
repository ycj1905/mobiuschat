import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Router, Route } from 'react-router-dom';
import Home from './container/Home';

const routing = (
  <BrowserRouter>
    <div>
      <Route path="/" exact component={App} />
      <Route path="/home" component={Home} />
    </div>
  </BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
