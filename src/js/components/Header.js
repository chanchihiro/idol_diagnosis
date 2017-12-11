import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <header>これはヘッダーです</header>
    <menu>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Q1">Question1</Link></li>
      </ul>
    </menu>
  </div>
);

export default Header;