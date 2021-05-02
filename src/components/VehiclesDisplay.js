import Vehicle from "./Vehicle";

const VehiclesDisplay = ({ vehicles, handleVehicleDelete }) => {
  return (
    <div className="vehicle-container">
      {vehicles.map((vehicle) => (
        <Vehicle
          key={vehicle.id}
          vehicle={vehicle}
          handleVehicleDelete={handleVehicleDelete}
        />
      ))}
    </div>
  );
};

export default VehiclesDisplay;
