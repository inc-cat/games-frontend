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
    return res.data.reviews;
  });
}

export function individualCommentID(id) {
  return api.get(`/reviews/${id}/comments`).then((res) => {
    return res.data;
  });
}

export function postCommentToReview(id, obj) {
  return api.post(`/reviews/${id}/comments`, obj)
}

export function getCategories() {
  return api.get('/categories')
}