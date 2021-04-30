import Vehicle from "../Vehicle/Vehicle.js";

function Vehicles({ vehicles, handleVehicleDelete, handleVehicleUpdate }) {
  return (
    <div>
      {vehicles.map((vehicle) => (
        <Vehicle
          key={vehicle.id}
          vehicle={vehicle}
          handleVehicleDelete={handleVehicleDelete}
          handleVehicleUpdate={handleVehicleUpdate}
        />
      ))}
    </div>
  );
}

export default Vehicles;