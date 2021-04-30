import { useState, useEffect } from "react";
import VehicleInput from "../Vehicle/VehicleInput.js";


function VehicleForm(props) {
  const [VehicleformState, setVehicleFormState] = useState({
    make: "",
    model: "",
    year: "",
    description: "",
    price: "",
    img_url: "",
    availability: "",
  });
  useEffect(() => {
    if (props.editFormVisible) {
      const { make, model, year, description, price, img_url, availability, id } = props.notice;
      setVehicleFormState({
        make,
        model,
        year,
        description,
        price,
        img_url,
        availability,
        id,
      });
    }
  }, [props.editFormVisible]);

  function handleVehicleChange(event) {
    setVehicleFormState((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
  }
  function handleVehicleSubmit(event) {
    event.preventDefault();
    if (props.editFormVisible) {
      props.handleVehicleUpdate(VehicleformState);
      props.toggleForm();
    } else {
      props.handleVehicleAdd(VehicleformState);
    }
  }
  return (
    <form onSubmit={handleVehicleSubmit}>
      <VehicleInput
        handleVehicleChange={handleVehicleChange}
        name="make"
        placeholder="Enter Make"
        type="text"
        value={VehicleformState.make}
        id="make"
      />
      <VehicleInput
        handleVehicleChange={handleVehicleChange}
        name="model"
        placeholder="Enter"
        type="text"
        value={VehicleformState.model}
        id="model"
      />
      <VehicleInput
        handleVehicleChange={handleVehicleChange}
        name="year"
        placeholder="Enter Year"
        type="text"
        value={VehicleformState.year}
        id="year"
      />
      <VehicleInput
        handleVehicleChange={handleVehicleChange}
        name="description"
        placeholder="Enter Description"
        type="text"
        value={VehicleformState.description}
        id="description"
      />
      <VehicleInput
        handleVehicleChange={handleVehicleChange}
        name="price"
        placeholder="Enter Price"
        type="text"
        value={VehicleformState.price}
        id="price"
      />
      <VehicleInput
        handleVehicleChange={handleVehicleChange}
        name="img_url"
        placeholder="Enter Image URL"
        type="text"
        value={VehicleformState.img_url}
        id="img_url"
      />
      <VehicleInput
        handleVehicleChange={handleVehicleChange}
        name="availability"
        placeholder="Notice Phone"
        type="text"
        value={VehicleformState.availability}
        id="availability"
      />
      
      <input type="submit" value={props.editFormVisible ? "Update" : "Add"} />
    </form>
  );
}
export default VehicleForm;