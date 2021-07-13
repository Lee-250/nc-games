import React, { useState, useEffect } from "react";
import { getCategories } from "./utils/api";
import NavBar from "./Home/NavBar";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categoriesFromApi) => {
      setCategories(categoriesFromApi);
    });
  }, []);
  console.log(categories);

  return (
    <div>
      <h2 className="header-container">Categories</h2>
      <NavBar />
      <ul className="category-list">
        {categories.map((category, index) => {
          return (
            <li key={index}>
              <Link to={`/reviews/${category.slug}`}>
                <h3>{category.slug}</h3>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
