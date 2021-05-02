const Vehicle = ({ vehicle, handleVehicleDelete }) => {
  return (
    <div className="vehicle-card">
      <img className="car-image" src={vehicle.img_url} alt="sports car" />
      <div className="car-info">
        <p>
          Make: <span>{vehicle.make}</span>
        </p>
        <p>
          Model: <span>{vehicle.model}</span>
        </p>
        <p>
          Year: <span>{vehicle.year}</span>
        </p>
        <p>
          Specs:{" "}
          <span>
            {vehicle.description.slice(1, vehicle.description.length - 1)}
          </span>
        </p>
        <p>
          Price: <span>{vehicle.price}</span>
        </p>
      </div>
      {/* <button onClick={() => handleVehicleDelete(vehicle.id)}>X</button> */}
    </div>
  );
};

export default Vehicle;
