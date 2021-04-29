<<<<<<< HEAD
import './App.css';
import './components/RentalForm';
import RentalForm from './components/RentalForm';
=======
import "./App.css";
import { useState, useEffect } from "react";
import {
  fetchReviews,
  createReview,
  deleteReview,
  updateReview,
} from "./services/api-service";
import Reviews from "./components/Reviews";
import ReviewForm from "./components/ReviewForm";
import Aside from "./components/Aside";
import Main from "./components/Main";
>>>>>>> 73a54548c44ba409a25571896c19354703a9589e

function App() {
  const [reviewsState, setReviewsState] = useState({ reviews: [] });

  // useState([]);

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

  return (
    <div className="App">
<<<<<<< HEAD
      <header className="App-header">
        <RentalForm />

      </header>
=======
      <div className="container">
        <Aside handleAdd={handleAdd} />
        <Main
          reviews={reviewsState.reviews}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />

        {/* <ReviewForm
        handleAdd={handleAdd}
        reviewsState={reviewsState}
        setReviewsState={setReviewsState}
        useState={useState}
      /> */}
        {/* <div>{reviewsState.reviews[0].name}</div> */}
        {/* {console.log(reviewsState[0].vehicle_name)} */}
        {/* {reviewsState.map((review) => (
          <Reviews
            key={review.id}
            name={review.name}
            vehicle_name={review.vehicle_name}
            date_rented={review.date_rented}
            description={review.description}
            rating={review.rating}
          />
        ))} */}

        {/* <Main />
      <Header />
      <Reviews />
      <Vehicles />
      <Rentals />
      <AboutUs />

      <Footer /> */}
      </div>
>>>>>>> 73a54548c44ba409a25571896c19354703a9589e
    </div>
  );
}

export default App;
