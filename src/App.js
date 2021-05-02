import "./App.css";
import { useState, useEffect } from "react";
import {
  fetchReviews,
  createReview,
  deleteReview,
  updateReview,
  fetchRentals,
  deleteRental,
  createRental,
  fetchVehicles,
  deleteVehicle,
} from "./services/api-service";
import Header1 from "./components/Header/Header1";
import Footer from "./components/Footer/Footer";

import AddReview from "./components/AddReview";

import Reviews from "./components/Reviews";
import RentalPage from "./components/RentalPage";
import VehiclesDisplay from "./components/VehiclesDisplay";

import { auth } from "./services/firebase.js";
import ReviewSlider from "./components/ReviewSlider";

function App() {
  const [state, setState] = useState({ user: null });
  const [reviewsState, setReviewsState] = useState({
    reviews: [],
  });

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setState((prevState) => ({
          ...prevState,
          user,
        }));
      } else {
        setState((prevState) => ({
          ...prevState,
          user: null,
        }));
      }
    });
    async function getReviews() {
      const reviews = await fetchReviews();
      setReviewsState({ reviews });
    }
    getReviews();
  }, []);

  async function handleAdd(formInputs) {
    try {
      const reviews = await createReview(formInputs);
      setReviewsState({ reviews });
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDelete(reviewId) {
    try {
      const reviews = await deleteReview(reviewId);
      setReviewsState({ reviews });
    } catch (error) {
      console.log(error);
    }
  }

  async function handleUpdate(formInputs) {
    try {
      const reviews = await updateReview(formInputs);
      setReviewsState({ reviews });
    } catch (error) {
      console.log(error);
    }
  }

  // rentals functions
  const [rentalsState, setRentalsState] = useState({ rentals: [] });

  useEffect(() => {
    async function getRentals() {
      const rentals = await fetchRentals();
      setRentalsState({ rentals });
    }
    getRentals();
  }, []);

  async function handleRentalDelete(rentalId) {
    try {
      const rentals = await deleteRental(rentalId);
      setRentalsState({ rentals });
    } catch (error) {
      console.log(error);
    }
  }
  async function handleRentalAdd(formInputs) {
    try {
      const rentals = await createRental(formInputs);
      setRentalsState({ rentals });
    } catch (error) {
      console.log(error);
    }
  }

  const [vehiclesState, setVehiclesState] = useState({ vehicles: [] });

  useEffect(() => {
    async function getVehicles() {
      const vehicles = await fetchVehicles();
      setVehiclesState({ vehicles });
    }
    getVehicles();
  }, []);

  async function handleVehicleDelete(vehicleId) {
    try {
      const vehicles = await deleteVehicle(vehicleId);
      setVehiclesState({ vehicles });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <div className="container">
        {/* {console.log(reviewsState.user)} */}
        <Header1 user={state.user} />

        <main>
          <ReviewSlider />
          <VehiclesDisplay
            vehicles={vehiclesState.vehicles}
            handleVehicleDelete={handleVehicleDelete}
          />
          <RentalPage
            rentals={rentalsState.rentals}
            handleRentalDelete={handleRentalDelete}
            handleRentalAdd={handleRentalAdd}
          />

          <AddReview handleAdd={handleAdd} user={state.user} />

          <Reviews
            reviews={reviewsState.reviews}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
            user={reviewsState.user}
          />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
