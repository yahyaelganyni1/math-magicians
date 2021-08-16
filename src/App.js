import React from 'react';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Quote from './components/Quote';
import './index.css';

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Quote />
      <Calculator />
    </div>
  );
}
