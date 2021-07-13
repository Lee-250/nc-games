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
  const { data } = await reviewsApi.get(`"/reviews/${review_id}"`);
  console.log(data.reviews, "this is the review");
  return data.review;
};

export const getCategories = async () => {
  const { data } = await reviewsApi.get("categories");
  return data.categories;
};

// in app.js when routing to reviews with category query, what should path be.
// would i have conditional logic in Reviews.jsx i.e. if category
