import React, { useState, useEffect } from "react";
import { getCommentsByReviewId } from "./utils/api";
import { useParams } from "react-router-dom";
import AddComment from "./AddComment";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [hasAddedComment, setHasAddedComment] = useState(false);
  const { review_id } = useParams();

  useEffect(() => {
    getCommentsByReviewId(review_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
    });
  }, [review_id, hasAddedComment]);

  console.log("hello");
  return (
    <div>
      <AddComment
        setHasAddedComment={setHasAddedComment}
        setComments={setComments}
      />

      {comments
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .map((comment) => {
          return (
            <ul key={comment.comment_id} className="comments-container">
              <li> User: {comment.created_by}</li>
              <li>{comment.body}</li>
              <li>{comment.created_at}</li>
            </ul>
          );
        })}
    </div>
  );
};

export default Comments;
