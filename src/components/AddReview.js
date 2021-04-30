import ReviewForm from "./ReviewForm";

function AddReview(props) {
  return (
    <div>
      <h1>Reviews </h1>
      <ReviewForm handleAdd={props.handleAdd} />
    </div>
  );
}

export default AddReview;
