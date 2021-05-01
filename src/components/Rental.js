import { useState } from "react";
import RentalForm from "./RentalForm";

function Rental({ rental, handleRentalDelete, handleRentalAdd }) {
  const [editFormVisible, setEditFormVisible] = useState(false);
  function toggleForm() {
    setEditFormVisible(!editFormVisible);
  }
  return (
    <>
      {editFormVisible ? (
        <RentalForm
          editFormVisible={editFormVisible}
          toggleForm={toggleForm}
          //   handleUpdate={handleUpdate}
          rental={rental}
          handleRentalDelete={handleRentalDelete}
          handleRentalAdd={handleRentalAdd}
        />
      ) : (
        <div className="rental">
          <h3>{rental.name}</h3>
          <p>{rental.email}</p>
          <p>{rental.phone_number}</p>
          <p>{rental.message}</p>
          <button onClick={() => handleRentalDelete(rental.id)}>Delete</button>
          {/* <button onClick={toggleForm}>Edit</button> */}
        </div>
      )}
    </>
  );
}

export default Rental;
