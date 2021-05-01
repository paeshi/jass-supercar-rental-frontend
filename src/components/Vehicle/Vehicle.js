import "./Vehicle.css"

const Vehicle = ({ vehicle, handleVehicleDelete }) => {


  return (
    <>
    <div className="container">
      <hr />
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
        Specs: <span>{vehicle.description}</span>
      </p>
      <p>
        Price: <span>{vehicle.price}</span>
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
