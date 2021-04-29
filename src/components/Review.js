import { useState } from "react";
import Form from "./Form";

function Review({ review, handleDelete, handleUpdate }) {
  const [editFormVisible, setEditFormVisible] = useState(false);
  function toggleForm() {
    setEditFormVisible(!editFormVisible);
  }
  return (
    <>
      {editFormVisible ? (
        <Form
          editFormVisible={editFormVisible}
          toggleForm={toggleForm}
          handleUpdate={handleUpdate}
          review={review}
        />
      ) : (
        <div className="review">
          <hr />
          <p>{review.name}</p>
          <p>{review.vehicle_name}</p>
          <p>{review.description}</p>
          <p>{review.rating}</p>
          <p>{review.id}</p>

          <small>{review.date_rented}</small>
          <button onClick={() => handleDelete(review.id)}>X</button>
          <button onClick={toggleForm}>Edit</button>
        </div>
      )}
    </>
  );
}

export default Review;
