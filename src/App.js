import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./Components/Home/Header";
import NavBar from "./Components/Home/NavBar";
import FeaturedCategories from "./Components/Home/FeaturedCategories";
import Reviews from "./Components/Reviews";
import Categories from "./Components/Categories";
import UserReview from "./Components/UserReview";
import { useState } from "react";
import Expandable from "./Components/Expandable";
import Comments from "./Components/Comments";

function App() {
  const [reviews, setReviews] = useState([]);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header />
          <NavBar />
          <FeaturedCategories />
        </Route>
        <Route exact path="/reviews/">
          <Reviews reviews={reviews} setReviews={setReviews} />
        </Route>
        <Route exact path="/reviews/category/:category">
          <Reviews reviews={reviews} setReviews={setReviews} />
        </Route>
        <Route exact path="/reviews/:review_id">
          <UserReview />
        </Route>
        <Route exact path="review/:review_id/comments">
          <UserReview />
        </Route>
        <Route exact path="/categories">
          <Categories />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
