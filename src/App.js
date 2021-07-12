import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./Components/Home/Header";
import NavBar from "./Components/Home/NavBar";
import FeaturedCategories from "./Components/Home/FeaturedCategories";
import Reviews from "./Components/Reviews";
import { useState } from "react";

function App() {
  const [reviews, setReviews] = useState([]);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header reviews={reviews} setReviews={setReviews} />
          <NavBar />
          <FeaturedCategories />
        </Route>
        <Route exact path="/reviews">
          <Reviews />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
