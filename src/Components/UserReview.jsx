import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewById } from "./utils/api";

const UserReview = () => {
  const [review, setReview] = useState();
  const { review_id } = useParams();

  useEffect(() => {
    getReviewById(review_id).then((reviewFromApi) => {
      setReview(reviewFromApi);
    });
  }, []);
  return <div></div>;
};

export default UserReview;
