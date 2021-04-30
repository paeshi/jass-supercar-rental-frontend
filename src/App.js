import './App.css';
import './components/RentalForm';
import RentalForm from './components/RentalForm';

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
  createVehicle,
  deleteVehicle,
  updateVehicle,
} from "./services/api-service";

import Aside from "./components/Aside";
import Main from "./components/Main";

import RentalPage from "./components/RentalPage";


function App() {
  const [reviewsState, setReviewsState] = useState({ reviews: [] });

  useEffect(() => {
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

  // Vehicle Section =======================
  const [vehiclesState, setVehiclesState] = useState({ vehicles: [] });

  useEffect(() => {
    async function getVehicles() {
      const vehicles = await fetchVehicles();
      setVehiclesState({ vehicles });
    }
    getVehicles();
  }, []);

  async function handleAdd(vehicleFormInputs) {
    try {
      const vehicles = await createVehicle(vehicleFormInputs);
      setVehiclesState({ vehicles });
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDelete(vehicleId) {
    try {
      const vehicles = await deleteVehicle(vehicleId);
      setVehiclesState({ vehicles });
    } catch (error) {
      console.log(error);
    }
  }

  async function handleUpdate(vehicleFormInputs) {
    try {
      const vehicles = await updateVehicle(vehicleFormInputs);
      setVehiclesState({ vehicles });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">

      <header className="App-header">
        <RentalForm />

      </header>

      <div className="container">
        <Aside handleAdd={handleAdd} />

        <Main
          reviews={reviewsState.reviews}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
        <RentalPage
          rentals={rentalsState.rentals}
          handleRentalDelete={handleRentalDelete}
          handleRentalAdd={handleRentalAdd}
        />
        <RentalPage
          vehicles={vehiclesState.vehicles}
          handleRentalDelete={handleVehicleDelete}
          handleRentalAdd={handleVehicleUpdate}
        />
      </div>

    </div>
  );
}

export default App;
