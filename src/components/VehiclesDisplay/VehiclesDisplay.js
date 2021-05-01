// import { useState, useEffect } from "react";
// import Pagination from '../Pagination';
import Vehicle from "../Vehicle/Vehicle";
// import axios from 'axios';
import "./VehiclesDisplay.css";

const VehiclesDisplay = ({ vehicles, handleVehicleDelete }) => {

  //----------------Pagination-----------------------------------
  // const [cars, setCars] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [vehiclesPerPage] = useState(6);

  // useEffect(() => {
  //   const fetchVehicles = async () => {
  //     setLoading(true);
  //     const res = await axios.get('http://localhost:3000/vehicles');
  //     setCars(res.data);
  //     setLoading(false);
  //   };

  //   fetchVehicles();
  // }, []);

  // // Get current posts
  // const indexOfLastVehicle = currentPage * vehiclesPerPage;
  // const indexOfFirstVehicle = indexOfLastVehicle - vehiclesPerPage;
  // const currentVehicles = cars.slice(indexOfFirstVehicle, indexOfLastVehicle);

  // // Change page
  // const paginate = pageNumber => setCurrentPage(pageNumber);

  //---------------------------------------------------------------

  return (
    <>
    <div className="gallery">
      {vehicles.map((vehicle) => (
        
        <Vehicle
          key={vehicle.id}
          vehicle={vehicle}
          handleVehicleDelete={handleVehicleDelete}
          // vehicles={currentVehicles} loading={loading}
        />
      ))}
    </div>
        {/* <Pagination
          vehiclesPerPage={vehiclesPerPage}
          totalVehicles={cars.length}
          paginate={paginate}
        /> */}
      </>
    
  );
};

export default VehiclesDisplay;

      
     
