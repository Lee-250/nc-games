import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { postCommentByReviewId } from "./utils/api";

const AddComment = () => {
  const [newCommentBody, setNewCommentBody] = useState("");
  const { review_id } = useParams();

  const handleSumbit = (event) => {
    event.preventDefault();
    const newComment = {
      username: "grumpy19",
      body: newCommentBody,
    };
    postCommentByReviewId(review_id, newComment).then((newComment) => {
      console.log(newComment);
    });
    // setComments(newComment);
  };
  return (
    <div>
      <form onSubmit={handleSumbit}>
        <label>
          Add a comment:
          <label>
            <textarea
              value={newCommentBody}
              onChange={(event) => setNewCommentBody(event.target.value)}
            ></textarea>
          </label>
          <button>Post</button>
        </label>
      </form>
    </div>
  );
};

export default AddComment;
