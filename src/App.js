import "./App.css";
import { useState, useEffect } from "react";
import { fetchReviews, createReview } from "./services/api-service";
import Reviews from "./components/Reviews";
import ReviewForm from "./components/ReviewForm";

function App() {
  const [reviewsState, setReviewsState] = useState([]);
  // useState({ reviews: [] });

  useEffect(() => {
    async function getReviews() {
      const reviews = await fetchReviews();
      setReviewsState(reviews);
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

  return (
    <div className="App">
      <ReviewForm
        handleAdd={handleAdd}
        reviewsState={reviewsState}
        setReviewsState={setReviewsState}
        useState={useState}
      />
      {/* <div>{reviewsState.reviews[0].name}</div> */}
      {/* {console.log(reviewsState[0].vehicle_name)} */}
      {reviewsState.map((review) => (
        <Reviews
          key={review.id}
          name={review.name}
          vehicle_name={review.vehicle_name}
          date_rented={review.date_rented}
          description={review.description}
          rating={review.rating}
        />
      ))}

      {/* <Main />
      <Header />
      <Reviews />
      <Vehicles />
      <Rentals />
      <AboutUs />

      <Footer /> */}
    </div>
  );
}

export default App;
