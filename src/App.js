/* eslint linebreak-style: ["error", "windows"] */

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Quote from './components/Quote';
import './index.css';

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Quote">
            <Quote />
          </Route>
          <Route path="/Calculator">
            <Calculator />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
