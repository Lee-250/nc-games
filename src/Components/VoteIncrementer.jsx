import React, { useEffect, useState } from "react";
import patchVotesByReviewId from "./utils/api";

const VoteIncrementer = () => {
  const [vote, setVote] = useState({ incVotes: 0 });

  useEffect(() => {
    patchVotesByReviewId();
  });
  return <div></div>;
};

export default VoteIncrementer;
