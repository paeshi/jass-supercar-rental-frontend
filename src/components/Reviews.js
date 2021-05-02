import Review from "./Review.js";

function Reviews({ reviews, handleDelete, handleUpdate, user }) {
  return (
    <div className="reviews-container">
      {reviews.map((review) => (
        <Review
          key={review.id}
          review={review}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      ))}
    </div>
  );
}

export default Reviews;
