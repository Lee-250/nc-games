import axios from "axios";

const reviewsApi = axios.create({
  baseUrl: "https://mygames-api.herokuapp.com/api/",
});

export const getReviews = async () => {
  const { data } = await reviewsApi.get("/reviews");
  return data.reviews;
};
