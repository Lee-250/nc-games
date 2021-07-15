import React from "react";
import { Link } from "react-router-dom";
import headerImage from "../../Images/dice.jpeg";

const Header = () => {
  const sectionStyle = {
    image: `url(${headerImage})`,
  };
  return (
    <div>
      <header
        style={{
          backgroundImage: sectionStyle.image,
          backgroundSize: "contain",
          backgroundPosition: "35% 75%",
        }}
        className="header-container"
      >
        <h1 style={{ color: "white" }}>NC Games Reviews</h1>
        <Link to="/reviews">
          <button>Browse All Reviews</button>
        </Link>
      </header>
    </div>
  );
};

export default Header;
