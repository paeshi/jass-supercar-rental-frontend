import { useState, useEffect } from "react";
import RentalInput from "./RentalInput.js";
import RentalTextArea from "./RentalTextArea";

function RentalForm(props) {
  const [formState, setFormState] = useState({
    name: "",
    eamil: "",
    phone_number: "",
    message: "",
  });

  //   useEffect(() => {
  //     const { name, email, phone_number, id } = props.rental;
  //     setFormState({
  //       name,
  //       email,
  //       phone_number,
  //       id,
  //     });
  //   }, [props.rental]);

  useEffect(() => {
    if (props.editFormVisible) {
      const { name, email, phone_number, message, id } = props.rental;
      setFormState({
        name,
        email,
        phone_number,
        message,
        id,
      });
    }
  }, [props.editFormVisible, props.rental]);

  function handleChange(event) {
    setFormState((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
  }

  //   function handleSubmit(event) {
  //     event.preventDefault();
  //     props.handleRentalAdd(formState);
  //     alert("thanks our rep will contact you shortly");
  //   }

  function handleSubmit(event) {
    event.preventDefault();
    if (props.editFormVisible) {
      props.handleUpdate(formState);
      props.toggleForm();
    } else {
      props.handleRentalAdd(formState);
      alert(
        "Thank you for your request, our representative will contact you shortly"
      );
    }
  }
  return (
    <form onSubmit={handleSubmit} id="rental-form">
      <RentalInput
        handleChange={handleChange}
        name="name"
        placeholder="Name"
        type="text"
        value={formState.name}
        id="name"
      />
      <RentalInput
        handleChange={handleChange}
        name="email"
        placeholder="Email"
        type="text"
        value={formState.email}
        id="email"
      />
      <RentalInput
        handleChange={handleChange}
        name="phone_number"
        placeholder="Phone"
        type="text"
        value={formState.phone_number}
        id="phone_number"
      />
      <RentalTextArea
        handleChange={handleChange}
        name="message"
        placeholder="Message"
        type="text"
        value={formState.message}
        id="message"
      />
      <input type="submit" value={props.editFormVisible ? "Update" : "Add"} />
      {/* <button onClick={() => props.handleRentalDelete(props.rental.id)}>
        X
      </button> */}
    </form>
  );
}

export default RentalForm;
