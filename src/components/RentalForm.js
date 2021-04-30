
import { useState, useEffect } from 'react';
import Input from './Input.js';

function RentalForm(props) {
    const [rentalFormState, setRentalFormState] = useState({
        name: '',
        email: '',
        phone_number: '',
        message: '',
        pickup_date: '',
        dropoff_date: '',

    });



    
    return (
        <form onSubmit={handleSubmit}>
            <label for="name">Full Name</label>
            <Input 
                handleChange={handleChange}
                name="name"
                placeholder="Full Name"
                type="text"
                value={rentalFormState.name}
                id="name"
            />
            <label for="email">Email</label>
            <Input 
                handleChange={handleChange}
                name="email"
                placeholder="Email"
                type="text"
                value={rentalFormState.email}
                id="email"
            />
            <label for="phoneNumber">Phone Number</label>
            <Input 
                handleChange={handleChange}
                name="phoneNumber"
                placeholder="Phone Number"
                type="text"
                value={rentalFormState.phone_number}
                id="phoneNumber"
            />
            <label for="message">Message</label>
            <Input 
                handleChange={handleChange}
                name="message"
                placeholder="Message"
                type="text"
                value={rentalFormState.message}
                id="message"
            />

            <label for="pickupDate">Pickup Date</label>
            <Input 
                handleChange={handleChange}
                name="pickupDate"
                placeholder="Pick-up Date"
                type="date"
                value={rentalFormState.pickup_date}
                id="pickupDate"
            />
            <label for="pickupDate">Drop-off Date</label>
            <Input
                handleChange={handleChange}
                name="dropoffDate"
                placeholder="Drop-off Date"
                type="date"
                value={rentalFormState.dropoff_date}
                id="dropoffDate"
            />
        </form>
    )
}

export default RentalForm;






import { useState, useEffect } from "react";
import RentalInput from "./RentalInput.js";

function RentalForm(props) {
  const [formState, setFormState] = useState({
    name: "",
    eamil: "",
    phone_number: "",
  });

  useEffect(() => {
    const { name, email, phone_number, id } = props.rental;
    setFormState({
      name,
      email,
      phone_number,
      id,
    });
  }, [props.rental]);

  //   useEffect(() => {
  //     if (props.editFormVisible) {
  //       const { name, email, phone_number, id } = props.rental;
  //       setFormState({
  //         name,
  //         email,
  //         phone_number,
  //         id,
  //       });
  //     }
  //   }, [props.editFormVisible, props.rental]);

  function handleChange(event) {
    setFormState((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.handleRentalAdd(formState);
    alert("thanks our rep will contact you shortly");
  }

  //   function handleSubmit(event) {
  //     event.preventDefault();
  //     if (props.editFormVisible) {
  //       props.handleUpdate(formState);
  //       props.toggleForm();
  //     } else {
  //       props.handleRentalAdd(formState);
  //     }
  //   }
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
      <input type="submit" value="Add" />
      {/* <button onClick={() => props.handleRentalDelete(props.rental.id)}>
        X
      </button> */}
    </form>
  );
}

export default RentalForm;

