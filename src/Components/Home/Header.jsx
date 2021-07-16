import React from "react";
import { Link } from "react-router-dom";
import headerImage from "../../Images/game.jpeg";

const Header = () => {
  const sectionStyle = {
    image: `url(${headerImage})`,
  };
  return (
    <div>
      <header
        style={{
          backgroundImage: sectionStyle.image,
          backgroundSize: "cover",
          backgroundPosition: "75% 75%",
        }}
        className="header-container"
      >
        <h1 style={{ color: "black" }}>NC Games Reviews</h1>
        <Link to="/reviews">
          <button>Browse All Reviews</button>
        </Link>
      </header>
    </div>
  );
};

export default Header;
