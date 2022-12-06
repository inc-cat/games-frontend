import axios from "axios";

const api = axios.create({
  baseURL: "https://nice-plum-pants.cyclic.app/api",
});

export function allReviews() {
  return api.get("/reviews").then(function (res) {
    console.log(res);
    return res.data.reviews;
  });
}

export function individualReview(id) {
  return api.get(`/reviews/${id}`).then((res) => {
    // console.log(res.data.reviews)
    return res.data.reviews;
  });
}