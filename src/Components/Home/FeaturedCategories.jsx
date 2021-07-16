import React from "react";

const FeaturedCategories = () => {
  return (
    <div>
      <h1>Featured Categories</h1>
      <ul className="dice-container">
        <li>
          <button className="dice-button">Strategy</button>
        </li>
        <li></li>
        <li>
          <button className="dice-button">Hidden-Roles</button>
        </li>
        <li></li>
        <li>
          <button className="dice-button">Roll-and-Write</button>
        </li>
        <li></li>
        <li>
          <button className="dice-button">Dexterity</button>
        </li>
        <li></li>
        <li>
          <button className="dice-button">Push-your-Luck</button>
        </li>
      </ul>
    </div>
  );
};

export default FeaturedCategories;
