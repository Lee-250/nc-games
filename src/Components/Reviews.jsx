import React, { useEffect, useState } from "react";
import { getReviews } from "./utils/api";
import { useParams } from "react-router-dom";
import NavBar from "./Home/NavBar";
import { Link } from "react-router-dom";
import headerImage from "../Images/dice.jpeg";

const Reviews = ({ reviews, setReviews }) => {
  const { category } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getReviews(category).then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
      setIsLoading(false);
    });
  }, [category]);

  const sectionStyle = {
    image: `url(${headerImage})`,
  };

  return (
    <div>
      <header
        style={{
          backgroundImage: sectionStyle.image,
          backgroundSize: "cover",
          backgroundPosition: "75% 75%",
        }}
        className="header-container"
      >
        <h2 style={{ color: "white" }}>Games Reviews</h2>
      </header>
      <NavBar />
      {isLoading ? (
        "Loading Reviews..."
      ) : (
        <ul className="items-container">
          {reviews.map((review) => {
            return (
              <li key={review.review_id}>
                <Link to={`/reviews/${review.review_id}`}>
                  <img
                    src={review.review_img_url}
                    width="200"
                    height="121"
                    alt="uploaded by user"
                  />
                  <h3>Game: {review.title}</h3>

                  <p>User: {review.owner}</p>
                  <p> Category: {review.category}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
