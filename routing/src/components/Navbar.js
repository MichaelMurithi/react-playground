import React from "react";
import { Link } from "react-router-dom";
function Navbar({ basketNumber }) {
  return (
    <nav className="nav">
      <h1>Hey learning React-router!</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/cart">
            Cart<span> {basketNumber} </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
