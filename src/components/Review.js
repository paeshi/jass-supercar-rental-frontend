import { useState } from "react";
import ReviewForm from "./ReviewForm";

function Review({ review, handleDelete, handleUpdate }) {
  const [editFormVisible, setEditFormVisible] = useState(false);
  function toggleForm() {
    setEditFormVisible(!editFormVisible);
  }
  return (
    <>
      {editFormVisible ? (
        <ReviewForm
          editFormVisible={editFormVisible}
          toggleForm={toggleForm}
          handleUpdate={handleUpdate}
          review={review}
        />
      ) : (
        <div className="review">
          <hr />
          <p>
            Name: <span>{review.name}</span>
          </p>
          <p>
            Supercar Rented: <span>{review.vehicle_name}</span>
          </p>
          <p>
            Review: <span>{review.description}</span>
          </p>
          <p>
            Rating: <span>{review.rating}</span>
          </p>
          <p>
            Date Rented: <span>{review.date_rented}</span>
          </p>
          <button onClick={() => handleDelete(review.id)}>X</button>
          <button onClick={toggleForm}>Edit</button>
        </div>
      )}
    </>
  );
}

export default Review;
