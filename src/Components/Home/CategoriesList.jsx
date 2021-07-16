import React from "react";
import { Link } from "react-router-dom";

const CategoriesList = () => {
  return (
    <div>
      <h1>Featured Categories</h1>
      <ul className="categories-container">
        <li>
          <Link to={"/reviews/category/strategy"}>
            <h3>Strategy</h3>
          </Link>
        </li>

        <li>
          <Link to={"/reviews/category/hidden-roles"}>
            <h3>Hidden-Roles</h3>
          </Link>
        </li>

        <li>
          <Link to="/reviews/category/roll-and-write">
            <h3>Roll-and-White</h3>
          </Link>
        </li>

        <li>
          <Link to="/reviews/category/dexterity">
            <h3>Dexterity</h3>
          </Link>
        </li>

        <li>
          <Link to="/reviews/category/">
            <h3>Push-your-Luck</h3>
          </Link>
        </li>
      </ul>
    </div>
  );
};

<Link></Link>;

export default CategoriesList;
