import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import FeaturedCategories from "./FeaturedCategories";
import CategoriesList from "./CategoriesList";
import useMediaQuery from ".././Hooks/useMediaQuery";

const Home = () => {
  const isPageWide = useMediaQuery("(min-width: 600px )");
  return (
    <div>
      <Header />
      <NavBar />
      {isPageWide ? (
        <FeaturedCategories />
      ) : (
        <div>
          <CategoriesList />
        </div>
      )}
    </div>
  );
};

export default Home;
