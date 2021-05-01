import "./Vehicle.css"

const Vehicle = ({ vehicle, handleVehicleDelete }) => {


  return (
    <>
    <div className="container">
      <hr />
      <p>
        <p className="bold">Make:</p> <span>{vehicle.make}</span>
      </p>
      <p>
        <p className="bold">Model:</p> <span>{vehicle.model}</span>
      </p>
      <p>
        <p className="bold">Year:</p> <span>{vehicle.year}</span>
      </p>
      <p>
        <p className="bold">Specs:</p> <span>{vehicle.description}</span>
      </p>
      <p>
        <p className="bold">Price:</p> <span>{vehicle.price}</span>
      </p>
      {/* <p>
        Avalability: <p>{vehicle.availability}</p>
      </p> */}
      <div className="img">
        <img src={vehicle.img_url} alt="sports car" />
      </div>

      {/* <button onClick={() => handleVehicleDelete(vehicle.id)}>X</button> */}
    </div>
    
    </>
    
    );
};

export default Vehicle;
