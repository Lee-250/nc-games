import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <h1>NC Games Reviews</h1>
      <Link to="/reviews">
        <button>Browse All Reviews</button>
      </Link>
    </div>
  );
};

export default Header;
