import axios from "axios";

const reviewsApi = axios.create({
  baseURL: "https://mygames-api.herokuapp.com/api",
});

export const getReviews = async (categorySelected) => {
  const { data } = await reviewsApi.get("/reviews", {
    params: {
      category: categorySelected,
    },
  });

  return data.reviews;
};

export const getReviewById = async (review_id) => {
  const { data } = await reviewsApi.get(`/reviews/${review_id}`);

  return data.review;
};

export const getCommentsByReviewId = async (review_id) => {
  const { data } = await reviewsApi.get(`/reviews/${review_id}/comments`);

  return data.comments;
};

export const getCategories = async () => {
  const { data } = await reviewsApi.get("categories");
  return data.categories;
};

export const patchVotesByReviewId = async (review_id, userVote) => {
  const { data } = await reviewsApi.patch(`/reviews/${review_id}`, userVote);

  return data.review;
};

export const postCommentByReviewId = async (review_id, userComment) => {
  const { data } = await reviewsApi.post(
    `/reviews/${review_id}/comments`,
    userComment
  );

  return data.newComment;
};
