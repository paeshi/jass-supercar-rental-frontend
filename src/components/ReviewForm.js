import { useState, useEffect } from "react";

const ReviewForm = ({ handleAdd, reviewsState, setReviewsState, useState }) => {
  //   const [formState, setFormState] = useState({
  //     name: "Billy",
  //     vehicle_name: "Delorean",
  //     date_rented: "",
  //     description: "Yeehaw",
  //     rating: 5,
  //   });

  function handleSubmit(event) {
    event.preventDefault();
    handleAdd(reviewsState);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type="text" name="name" />
        {/* {console.log(formState.name)} */}
        {console.log(reviewsState)}
        <label>Supercar: </label>
        <input type="text" />
        <label>Date Rented: </label>
        <input type="date" />
        <label>Review: </label>
        <textarea name="description" />
        <label>Rating: </label>
        <input type="text" />
        <input type="submit" />
      </form>
    </>
  );
};

export default ReviewForm;
