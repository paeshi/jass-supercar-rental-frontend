import ReviewForm from "./ReviewForm";
// import { login } from "../services/firebase";

function AddReview(props) {
  return (
    <div className="review-container">
      <h2>Reviews </h2>
      {props.user ? <ReviewForm handleAdd={props.handleAdd} /> : "Please login"}
    </div>
  );
}

export default AddReview;
