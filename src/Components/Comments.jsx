import React, { useState, useEffect } from "react";
import { getCommentsByReviewId } from "./utils/api";
import { useParams } from "react-router-dom";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const { review_id } = useParams();

  useEffect(() => {
    getCommentsByReviewId(review_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
    });
  }, [review_id]);
  return (
    <div>
      {comments.map((comment) => {
        return (
          <ul className="comments-container">
            <li>{comment.created_by}</li>
            <li>{comment.body}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default Comments;
