import React, { useEffect } from "react";
import { getReviews } from "./utils/api";
import { useParams } from "react-router-dom";
import NavBar from "./Home/NavBar";
import { Link } from "react-router-dom";
import headerImage from "../Images/dice.jpeg";

const Reviews = ({ reviews, setReviews }) => {
  const { category } = useParams();

  useEffect(() => {
    getReviews(category).then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
    });
  }, [category]);

  const sectionStyle = {
    image: `url(${headerImage})`,
  };

  return (
    <div>
      <h2
        style={{
          backgroundImage: sectionStyle.image,
          backgroundSize: "cover",
          backgroundPosition: "75% 75%",
        }}
        className="header-container"
      >
        Games Reviews
      </h2>
      <NavBar />
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
    </div>
  );
};

export default Reviews;
