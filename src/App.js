import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import Reviews from "./Components/Reviews";
import Categories from "./Components/Categories";
import UserReview from "./Components/UserReview";
import User from "./Components/User";
import { useState } from "react";

function App() {
  const [reviews, setReviews] = useState([]);
  const [user, setUser] = useState({});
  // const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
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
        <Route exact path="/login">
          <User user={user} setUser={setUser} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
