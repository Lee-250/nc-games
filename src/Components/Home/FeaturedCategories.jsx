import React from "react";
import { Link } from "react-router-dom";

const FeaturedCategories = () => {
  return (
    <div>
      <h1>Featured Categories</h1>
      <ul className="dice-container">
        <li>
          <Link className="dice-button" to={"/reviews/category/strategy"}>
            Strategy
          </Link>
        </li>

        <li></li>
        <li>
          <Link className="dice-button" to={"/reviews/category/hidden-roles"}>
            Hidden-Roles
          </Link>
        </li>
        <li></li>
        <li>
          <Link className="dice-button" to="/reviews/category/roll-and-write">
            Roll-and-Write
          </Link>
        </li>
        <li></li>
        <li>
          <Link className="dice-button" to="/reviews/category/dexterity">
            Dexterity
          </Link>
        </li>
        <li></li>
        <li>
          <Link className="dice-button" to="/reviews/category/">
            Push-your-Luck
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FeaturedCategories;
