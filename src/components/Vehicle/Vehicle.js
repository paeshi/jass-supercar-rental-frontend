import "./Vehicle.css"

const Vehicle = ({ vehicle, handleVehicleDelete }) => {


  return (
    <>
    <div className="container">
      <hr />
      
        <p><h6 className="bold-text">Make: </h6> <span className="vehicle-info">{vehicle.make}</span></p>
      
    
        <p><h6 className="bold-text">Model: </h6><span className="vehicle-info">{vehicle.model}</span></p>
      
    
        <p><h6 className="bold-text">Year: </h6><span className="vehicle-info">{vehicle.year}</span></p>
      
    
        <p><h6 className="bold-text">Specs: </h6><span className="vehicle-info">{JSON.parse(vehicle.description)}</span></p>
      
    
        <p><h6 className="bold-text">Price: </h6><span className="vehicle-info">{vehicle.price}</span></p>
      
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
