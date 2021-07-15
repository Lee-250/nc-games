import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewById } from "./utils/api";
import NavBar from "./Home/NavBar";
import Expandable from "./Expandable";
import Comments from "./Comments";
import Votes from "./Votes";

const UserReview = () => {
  const [review, setReview] = useState({});
  const { review_id } = useParams();

  useEffect(() => {
    getReviewById(review_id).then((reviewFromApi) => {
      setReview(reviewFromApi);
    });
  }, [review_id]);
  console.log(review);

  const sectionStyle = {
    image: `url(${review.review_img_url})`,
  };
  return (
    <div>
      <header
        style={{
          backgroundImage: sectionStyle.image,
          backgroundPosition: "center",
        }}
        className="header-container"
      >
        <h1>{review.title}</h1>
        <h3>By: {review.owner}</h3>
      </header>
      <NavBar />
      <section className="items-container">
        <h2>Review</h2>
        <p>{review.review_body}</p>
        <Votes />
      </section>
      <h2>Comments</h2>
      <Expandable>
        <Comments />
      </Expandable>
    </div>
  );
};

export default UserReview;
