const BASE_URL_REVIEWS = "http://localhost:3000/reviews";

function fetchReviews() {
  return fetch(BASE_URL_REVIEWS).then((res) => res.json());
}

function createReview(data) {
  return fetch(BASE_URL_REVIEWS, {
    method: "POST",
    headers: {
      "Content-type": "Application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
}

export { fetchReviews, createReview };
