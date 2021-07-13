import React, { useEffect } from "react";
import { getReviews } from "./utils/api";
import { useParams } from "react-router-dom";
import NavBar from "./Home/NavBar";

const Reviews = ({ reviews, setReviews }) => {
  const { category } = useParams();

  console.log(category);
  useEffect(() => {
    getReviews(category).then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
    });
  }, []);

  return (
    <div className="Reviews">
      {console.log(reviews)}
      <h2 className="header-container">Games Reviews</h2>
      <NavBar />
      <ul className="reviews-list">
        {reviews.map((review) => {
          return (
            <li key={review.review_id}>
              <h3>Game: {review.title}</h3>

              <p>User: {review.owner}</p>
              <p> Category: {review.category}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;
