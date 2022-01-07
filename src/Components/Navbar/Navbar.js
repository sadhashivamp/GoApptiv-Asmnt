import React, { useState } from "react";
import "./Navbar.css";
import GoShopy from "./GoShopy.png";

import { Link } from "react-router-dom";

const Navbar = ({ cartItems }) => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className="navbar">
      <h3 className="logo">
        <img src={GoShopy} className="main_logo" alt="GoShopy" />
      </h3>
      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        <Link to="/" className="home">
          <li>Home</li>
        </Link>
        <Link to="/about" className="about">
          <li>About</li>
        </Link>
        <Link to="/products" className="products">
          <li>Products</li>
        </Link>
        <Link to="/signup" className="signup">
          <li>Signup</li>
        </Link>
        <Link to="/cart" className="cart">
          <i className="fas fa-shopping-cart"></i>
          <span className="cart-length">
            {cartItems.length === 0 ? "" : cartItems.length}
          </span>
        </Link>
      </ul>
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
