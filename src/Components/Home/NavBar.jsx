import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul className="nav-bar-container">
          <Link to="/">
            <li>Home</li>
          </Link>

          <Link to="/reviews">
            <li>Reviews</li>
          </Link>
          <Link to="/categories">
            <li>Categories</li>
          </Link>
          <li>Post</li>
          <Link to="/login">
            <li>Log in</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
