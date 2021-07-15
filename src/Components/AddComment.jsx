import React, { useState } from "react";

const AddComment = () => {
  const [newComment, setNewComment] = useState("");

  const handleSumbit = (event) => {
    event.preventDefault();
    console.log("submitted");
  };
  return (
    <div>
      <form>
        <label>
          Add a comment:
          <textarea
            value={newComment}
            onChange={(event) => setNewComment(event.target.value)}
          ></textarea>
        </label>
      </form>
    </div>
  );
};

export default AddComment;
