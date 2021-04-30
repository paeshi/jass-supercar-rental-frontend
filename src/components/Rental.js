<<<<<<< HEAD
import RentalForm from './Form.js';

function Rental(props) {
    return (
        <div className="RentalPage">
            <div className="container">
                <RentalImg />

                <RentalForm handleAdd={handleAdd} />

            </div>
        </div>
    );
}

export default Rental;





=======
import { useState } from "react";
import RentalForm from "./RentalForm";

function Rental({ rental, handleRentalDelete, handleRentalAdd }) {
  const [editFormVisible, setEditFormVisible] = useState(false);
  function toggleForm() {
    setEditFormVisible(!editFormVisible);
  }
  return (
    <>
      <RentalForm
        // editFormVisible={editFormVisible}
        // toggleForm={toggleForm}
        //   handleUpdate={handleUpdate}
        rental={rental}
        handleRentalDelete={handleRentalDelete}
        handleRentalAdd={handleRentalAdd}
      />

      <div className="rental">
        <h3>{rental.name}</h3>
        <p>{rental.email}</p>
        <p>{rental.phone_number}</p>
        <button onClick={() => handleRentalDelete(rental.id)}>Delete</button>
        {/* <button onClick={toggleForm}>Edit</button> */}
      </div>
    </>
  );
}

export default Rental;
>>>>>>> 76785d165456f56b795c06c301117788dbcd4c0d
