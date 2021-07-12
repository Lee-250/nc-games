import React, { useEffect } from "react";
import { getReviews } from "./utils/api";

const Reviews = ({ reviews, setReviews }) => {
  useEffect(() => {
    getReviews().then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
    });
  }, []);

  return (
    <div clasName="Reviews">
      <h2>Games Reviews</h2>
      <ul>
        {reviews.map((review) => {
          return (
            <li key={review.review_id}>
              <h3>{review.owner}</h3>
              <h3>{review.category}</h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;
