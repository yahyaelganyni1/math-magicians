/* eslint linebreak-style: ["error", "windows"] */

import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <h1>Math magicians</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="Calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/Quote">Quote</Link>
        </li>
      </ul>
    </nav>
  );
}
