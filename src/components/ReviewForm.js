import { useState, useEffect } from "react";

const ReviewForm = ({ handleAdd, reviewsState, setReviewsState, useState }) => {
  const [formState, setFormState] = useState({
    name: "",
    vehicle_name: "",
    date_rented: "",
    description: "",
    rating: 5,
  });

  function handleSubmit(event) {
    event.preventDefault();
    handleAdd(formState);
  }

  //   function handleChange(event) {
  //     setFormState((prevState) => ({
  //       ...prevState,
  //       [event.target.id]: event.target.value,
  //     }));
  //   }

  function handleChange(event) {
    setFormState(event.target.value);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleChange}
        />
        {/* {console.log(formState.name)} */}
        {/* {console.log(reviewsState)}
        {console.log(formState)} */}
        <label>Supercar: </label>
        <input
          type="text"
          name="vehicle_name"
          value={formState.vehicle_name}
          onChange={handleChange}
        />
        {/* <label>Date Rented: </label>
        <input type="date" />
        <label>Review: </label>
        <textarea name="description" />
        <label>Rating: </label>
        <input type="text" /> */}
        <input type="submit" />
      </form>
    </>
  );
};

export default ReviewForm;
