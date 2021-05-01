import { useState, useEffect } from "react";
import ReviewInput from "./ReviewInput";
import ReviewTextArea from "./ReviewTextArea";

function ReviewForm(props) {
  const [formState, setFormState] = useState({
    name: "",
    vehicle_name: "",
    date_rented: "",
    description: "",
    rating: "",
  });

  useEffect(() => {
    if (props.editFormVisible) {
      const {
        name,
        vehicle_name,
        date_rented,
        description,
        rating,
        id,
      } = props.review;
      setFormState({
        name,
        vehicle_name,
        date_rented,
        description,
        rating,
        id,
      });
    }
  }, [props.editFormVisible, props.review]);

  function handleChange(event) {
    setFormState((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (props.editFormVisible) {
      props.handleUpdate(formState);
      props.toggleForm();
    } else {
      props.handleAdd(formState);
    }
  }
  return (
    <form onSubmit={handleSubmit} id="review-form">
      <ReviewInput
        handleChange={handleChange}
        name="name"
        placeholder="Name"
        type="text"
        value={formState.name}
        id="name"
      />
      <ReviewInput
        handleChange={handleChange}
        name="vehicle_name"
        placeholder="Vehicle"
        type="text"
        value={formState.vehicle_name}
        id="vehicle_name"
      />
      <ReviewInput
        handleChange={handleChange}
        name="date_rented"
        placeholder="Date Rented"
        type="date"
        value={formState.date_rented}
        id="date_rented"
      />
      {/* <ReviewInput
        handleChange={handleChange}
        name="description"
        placeholder="Description"
        type="text"
        value={formState.description}
        id="description"
      /> */}
      <ReviewTextArea
        handleChange={handleChange}
        name="description"
        placeholder="Description"
        type="text"
        value={formState.description}
        id="description"
      />
      <ReviewInput
        handleChange={handleChange}
        name="rating"
        placeholder="#"
        type="number"
        min="1"
        max="5"
        value={formState.rating}
        id="rating"
      />
      <input type="submit" value={props.editFormVisible ? "Update" : "Add"} />
    </form>
  );
}

export default ReviewForm;
