import { useState } from "react";
import VehicleForm from "../Vehicle/VehicleForm";

function Vehicle({ vehicle, handleVehicleDelete, handleVehicleUpdate }) {
  const [editFormVisible, setEditFormVisible] = useState(false);
  function toggleForm() {
    setEditFormVisible(!editFormVisible);
  }
  return (
    <>
      {editFormVisible ? (
        <VehicleForm
          editFormVisible={editFormVisible}
          toggleForm={toggleForm}
          handleVehicleUpdate={handleVehicleUpdate}
          vehicle={vehicle}
        />
      ) : (
        <div className="vehicle">
          <p>{vehicle.make}</p>
          <p>{vehicle.model}</p>
          <p>{vehicle.year}</p>
          <p>{vehicle.description}</p>
          <p>{vehicle.price}</p>
          <p>{vehicle.img_url}</p>
          <p>{vehicle.availability}</p>
          <button onClick={() => handleVehicleDelete(vehicle.id)}>*</button>
          <button onClick={toggleForm}>Edit</button>
        </div>
      )}
    </>
  );
}

export default Vehicle;