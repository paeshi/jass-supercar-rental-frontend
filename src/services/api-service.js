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

function deleteReview(id) {
  return fetch(`${BASE_URL_REVIEWS}/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());
}

function updateReview({
  name,
  vehicle_name,
  date_rented,
  description,
  rating,
  id,
}) {
  return fetch(`${BASE_URL_REVIEWS}/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "Application/json",
    },
    body: JSON.stringify({
      name,
      vehicle_name,
      date_rented,
      description,
      rating,
    }),
  }).then((res) => res.json());
}

// rentals functions

const BASE_URL_RENTALS = "http://localhost:3000/rentals";

function fetchRentals() {
  return fetch(BASE_URL_RENTALS).then((res) => res.json());
}

function deleteRental(id) {
  return fetch(`${BASE_URL_RENTALS}/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());
}

function createRental(data) {
  return fetch(BASE_URL_RENTALS, {
    method: "POST",
    headers: {
      "Content-type": "Application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
}

const BASE_URL_VEHICLES = "http://localhost:3000/vehicles";

function fetchVehicles() {
  return fetch(BASE_URL_VEHICLES).then((res) => res.json());
}

function deleteVehicle(id) {
  return fetch(`${BASE_URL_VEHICLES}/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());
}

export {
  fetchReviews,
  createReview,
  deleteReview,
  updateReview,
  fetchRentals,
  deleteRental,
  createRental,
  fetchVehicles,
  deleteVehicle,
};
