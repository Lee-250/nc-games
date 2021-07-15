import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewById, patchVotesByReviewId } from "./utils/api";

const Votes = () => {
  const [voteCount, setVoteCount] = useState(0);

  const { review_id } = useParams();

  useEffect(() => {
    getReviewById(review_id).then((reviewFromApi) => {
      setVoteCount(reviewFromApi.votes);
    });
  }, [review_id]);

  const incrementVotes = () => {
    setVoteCount((currentVoteCount) => {
      currentVoteCount += 1;
      return currentVoteCount;
    });
    patchVotesByReviewId(review_id, { inc_votes: 1 });
  };

  return (
    <div>
      <h3>{voteCount}</h3>
      <button onClick={() => incrementVotes()}>Vote</button>
    </div>
  );
};

export default Votes;
