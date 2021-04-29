import { useState, useEffect } from "react";
import Input from "./Input.js";

function Form(props) {
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
      } = props.review;
      setFormState({
        name,
        vehicle_name,
        date_rented,
        description,
        rating,
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
    <form onSubmit={handleSubmit}>
      <Input
        handleChange={handleChange}
        name="name"
        placeholder="Name"
        type="text"
        value={formState.name}
        id="name"
      />
      <Input
        handleChange={handleChange}
        name="vehicle_name"
        placeholder="Vehicle"
        type="text"
        value={formState.vehicle_name}
        id="vehicle_name"
      />
      <Input
        handleChange={handleChange}
        name="date_rented"
        placeholder="Date Rented"
        type="date"
        value={formState.date_rented}
        id="date_rented"
      />
      <Input
        handleChange={handleChange}
        name="description"
        placeholder="Description"
        type="text"
        value={formState.description}
        id="description"
      />
      <Input
        handleChange={handleChange}
        name="rating"
        placeholder="Rating"
        type="text"
        value={formState.rating}
        id="rating"
      />
      <input type="submit" value={props.editFormVisible ? "Update" : "Add"} />
    </form>
  );
}

export default Form;
